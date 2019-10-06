import * as React from 'react';
import 'react-scrollbar/dist/css/scrollArea.css';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
