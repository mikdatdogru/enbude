import { app } from 'electron';

const close = (mainWindow, event) => {
  if (app.quitting) {
    mainWindow = null;
  } else {
    event.preventDefault();
    mainWindow.hide();
  }
  console.log('close');

};

export default close;
