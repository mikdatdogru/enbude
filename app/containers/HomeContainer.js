import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Knex from 'knex';
import knexConf from '../knexfile';

import { getCurrentClipboard, getWindowEvent, ipcSend } from '../utils/helper';
import { setClipboard } from '../actions/clipboard';
import { picksSchema, optionsSchema } from '../store/schema';

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
    const knex = Knex(knexConf[process.env.NODE_ENV]);
    knex.schema
      .hasTable('picks')
      .then(exists => {
        // eslint-disable-next-line promise/always-return
        if (!exists) {
          return knex.schema.createTable('picks', picksSchema);
        }
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    knex('picks')
      .insert({ createdAt: new Date(), data: 'rowValuessd1' })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });


    setTimeout(() => {
      // eslint-disable-next-line promise/catch-or-return
      knex('picks')
        .then(rows => {
          console.log(rows);
          return rows;
        })
        .catch(err => {
          debugger;

          return err;
        });
    }, 1000);

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
  children: PropTypes.func
};
HomeContainer.defaultProps = {
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
)(HomeContainer);
