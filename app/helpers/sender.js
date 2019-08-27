const sender = (window, windowName, event) => {
  window.webContents.send('window-event', { windowName, event });
};

export default sender;
