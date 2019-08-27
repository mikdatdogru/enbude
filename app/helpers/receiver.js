import { ipcMain } from 'electron';

const receiver = cb => {
  ipcMain.on('paste-data', (event, arg) => {
    return cb(arg);
  });
};

export default receiver;
