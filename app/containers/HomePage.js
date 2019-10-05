import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentClipboard, getWindowEvent, ipcSend } from '../utils/helper';
import { setClipboard } from '../actions/clipboard';
import ImgItem from '../components/ImgItem';
import TextItem from '../components/TextItem';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      text: '',
      clipboard: []
    };
    this.myRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const result = {};
    result.clipboard = [...nextProps.clipboard];

    return { ...result };
  }

  componentDidMount() {
    getCurrentClipboard((type, data) => {
      this.props.setClipboard(type, data);
    });




    getWindowEvent((windowName, data) => {
      console.log(windowName, data.event);

      if (data.event === 'activate') {
        const node = this.myRef.current;
        console.log(node);
        node.firstElementChild.focus();
      }
    });
    this.moveFocus();
  }

  moveFocus() {
    const node = this.myRef.current;

    node.addEventListener('keydown', function(e) {
      const active = document.activeElement;
      if (e.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if (e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }

  listenItem = (e, item) => {
    console.log(e.charCode);
    if (e.charCode === 13) {
      ipcSend(item.data);
    }
  };

  render() {
    return (
      <div ref={this.myRef}>
        {this.state.clipboard
          .sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .map((item, i) => {
            return (
              <div
                onKeyPress={e => this.listenItem(e, item)}
                tabIndex={i}
                key={i}
                className="clipItem"
              >
                {item.type === 'img' && <ImgItem img={item.data} />}
                {item.type === 'text' && <TextItem text={item.data} />}
              </div>
            );
          })}
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.func
};
HomePage.defaultProps = {
  children: () => {}
};

const mapStateToProps = state => ({
  clipboard: state.clipboard
});
const mapDispatchToProps = {
  setClipboard
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
