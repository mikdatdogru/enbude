import { Menu, nativeImage, Tray } from 'electron';
import path from 'path';
import jetpack from 'fs-jetpack';

export default class tray {
  constructor() {
    this.tray = null;
  }

  static buildDarwinTemplate() {
    return [
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Quit', accelerator: 'Command+Q', selector: 'terminate:' }
    ];
  }

  static buildDefaultTemplate() {
    return [
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Quit', accelerator: 'Command+Q', selector: 'terminate:' }
    ];
  }

  buildTray() {
    const template =
      process.platform === 'darwin'
        ? tray.buildDarwinTemplate()
        : tray.buildDefaultTemplate();

    const trayIconPath =
      process.env.NODE_ENV === 'production'
        ? path.join(__dirname, `../../app.asar/resources/tray.png`)
        : path.join(__dirname, `../../resources/tray.png`);

    let trayIcon = nativeImage.createFromPath(trayIconPath);

    trayIcon = trayIcon.resize({ width: 18, height: 18 });

    this.tray = new Tray(trayIcon);

    const contextMenu = Menu.buildFromTemplate(template);

    this.tray.setToolTip('enbude');
    this.tray.setContextMenu(contextMenu);

    return this.tray;
  }
}
