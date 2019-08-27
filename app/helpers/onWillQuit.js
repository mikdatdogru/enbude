import electron, { globalShortcut, app } from 'electron';

const willQuit = () => {
  globalShortcut.unregisterAll();
  console.log('willQuit');
};

export default willQuit;
