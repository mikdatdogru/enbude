import electron, { globalShortcut } from 'electron';
import sender from './sender';

const openPaneShortcut = 'Ctrl+X';
export const openPane = mainWindow => {
  const ret = globalShortcut.register(openPaneShortcut, () => {
    console.log('Ctrl+X');
    const mousePos = electron.screen.getCursorScreenPoint();
    mainWindow.setPosition(mousePos.x, mousePos.y, false);

    mainWindow.show();
    mainWindow.focus();

    sender(mainWindow, 'mainWindow', 'activate');

    mainWindow.setAlwaysOnTop(true, 'normal', 1);
  });

  if (!ret) {
    console.log(`${openPaneShortcut} registration failed`);
  }
};

const closePaneShortcut = 'Ctrl+Y';
export const closePane = mainWindow => {
  const ret = globalShortcut.register(closePaneShortcut, () => {
    console.log('Ctrl+Y');

    mainWindow.hide();

    sender(mainWindow, 'mainWindow', 'passive');
  });

  if (!ret) {
    console.log(`${openPaneShortcut} registration failed`);
  }
};

const initShortcuts = mainWindow => {
  openPane(mainWindow);
  closePane(mainWindow);
};

export default initShortcuts;
