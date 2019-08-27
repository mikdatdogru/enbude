export const CLIPBOARD_SET = 'CLIPBOARD_SET';

export function setClip(payload) {
  return {
    type: CLIPBOARD_SET,
    payload
  };
}

export function setClipboard(type, data) {
  return dispatch => {
    dispatch(setClip({ type, data, createdAt: new Date() }));
  };
}
