import { app } from 'electron';

const didFinishLoad = mainWindow => {

  console.log('onDidFinishLoad');





  console.log('=====');
  console.log(app.getPath('home'));
  console.log('=====');

  if (!mainWindow) {
    throw new Error('"mainWindow" is not defined');
  }

  if (process.env.ALWAYS_SHOW) {
    return;
  }

  if (process.env.START_MINIMIZED) {
    mainWindow.minimize();
  } else {
    mainWindow.hide();
    // mainWindow.focus();
  }
};

export default didFinishLoad;
