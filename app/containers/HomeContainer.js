import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentClipboard, getWindowEvent, ipcSend } from '../utils/helper';
import { setAllClipboard, setClipboard } from '../actions/clipboard';
import { knex } from '../store/knexFunctions';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      text: '',
      clipboard: []
    };
    this.myRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps) {
    const result = {};
    result.clipboard = [...nextProps.clipboard];

    return { ...result };
  }

  componentDidMount() {

    knex('picks')
      .then(rows => {
        this.props.setAllClipboard(rows);
        return rows;
      })
      .catch(err => {
        debugger;

        return err;
      });

    getCurrentClipboard((type, data) => {
      this.props.setClipboard(type, data);
    });

    getWindowEvent((windowName, data) => {
      // console.log(windowName, data.event);

      if (data.event === 'activate') {
        const node = this.myRef.current;
        // console.log(node);
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
    // console.log(item);
    // console.log(e);

    if (e === 'click' || e.charCode === 13) {
      ipcSend(item.data);

      setTimeout(() => {}, 2000);
    }
  };

  render() {
    const { children } = this.props;
    const { clipboard } = this.state;
    return (
      children &&
      children({
        clipboard,
        myRef: this.myRef,
        listenItem: this.listenItem
      })
    );
  }
}

HomeContainer.propTypes = {
  children: PropTypes.func,
  setClipboard: PropTypes.func.isRequired,
  setAllClipboard: PropTypes.func.isRequired
};
HomeContainer.defaultProps = {
  children: () => {}
};

const mapStateToProps = state => ({
  clipboard: state.clipboard
});
const mapDispatchToProps = {
  setClipboard,
  setAllClipboard
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
