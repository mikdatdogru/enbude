import { app } from 'electron';

const windowAllClosed = () => {
  console.log('onWindowAllClosed');
  if (process.platform !== 'darwin') {
    app.quit();
  }
};

export default windowAllClosed;
