import { CLIPBOARD_SET } from '../actions/clipboard';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CLIPBOARD_SET: {
      console.log(state, action);
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
