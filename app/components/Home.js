import React, { Component, Fragment } from 'react';
import HomePage from '../containers/HomePage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <HomePage>
        {({ state, clipboard }) => {
          return (
            <Fragment>

            </Fragment>
          );
        }}
      </HomePage>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
