import { app } from 'electron';

const close = (mainWindow, event) => {
  console.log('onClose');
  if (app.quitting) {
    mainWindow = null;
  } else {
    event.preventDefault();
    mainWindow.hide();
  }
};

export default close;
