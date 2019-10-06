import { knex } from '../store/knexFunctions';

export const CLIPBOARD_SET = 'CLIPBOARD_SET';
export const CLIPBOARD_ALL_SET = 'CLIPBOARD_ALL_SET';

export function setClip(payload) {
  return {
    type: CLIPBOARD_SET,
    payload
  };
}

export function setClipboard(type, data) {
  const newData = {
    createdAt: new Date(),
    type,
    data
  };
  knex('picks')
    .insert({ ...newData })
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(err => {
      return err;
    });

  return dispatch => {
    dispatch(setClip({ ...newData }));
  };
}

export function setAllClip(payload) {
  return {
    type: CLIPBOARD_ALL_SET,
    payload
  };
}
export function setAllClipboard(data) {
  return dispatch => {
    dispatch(setAllClip([...data]));
  };
}
