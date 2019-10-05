import electron, { globalShortcut, app } from 'electron';

const willQuit = () => {
  console.log('onWillQuit');
  globalShortcut.unregisterAll();
};

export default willQuit;
