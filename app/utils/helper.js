import electron, { ipcRenderer, globalShortcut } from 'electron';

export const x = () => {};

export const getCurrentClipboard = cb => {
  ipcRenderer.on('clipboard-text', (event, message) => {
    return cb('text', message);
  });
  ipcRenderer.on('clipboard-img', (event, message) => {
    return cb('img', message);
  });
};
export const getAllClipboard = cb => {
  ipcRenderer.on('clipboard-all-data', (event, message) => {
    return cb('allData', message);
  });
};
export const getWindowEvent = cb => {
  ipcRenderer.on('window-event', (windowName, data) => {
    return cb(windowName, data);
  });
};

export const ipcSend = data => {
  ipcRenderer.send('paste-data', { data });
};
