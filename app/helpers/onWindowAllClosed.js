import { app } from 'electron';

const windowAllClosed = () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
};

export default windowAllClosed;
