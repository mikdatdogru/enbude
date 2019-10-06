import * as React from 'react';
import { tableCreator } from './store/knexFunctions';
import { optionsSchema, picksSchema } from './store/schema';

export default class App extends React.Component {
  render() {
    tableCreator('picks', picksSchema);
    tableCreator('optionsSchema', optionsSchema);

    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
