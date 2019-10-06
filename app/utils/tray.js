import { Menu, nativeImage, Tray } from 'electron';
import path from 'path';

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

    const trayIconPath = fileName =>
      process.env.NODE_ENV === 'production'
        ? path.join(__dirname, `../../app.asar/resources/${fileName}`)
        : path.join(__dirname, `../../resources/${fileName}`);

    let trayIcon = nativeImage.createFromPath(trayIconPath('tray.png'));
    trayIcon = trayIcon.resize({ width: 18, height: 18 });

    this.tray = new Tray(trayIcon);
    const contextMenu = Menu.buildFromTemplate(template);

    this.tray.setToolTip('Pickman');
    this.tray.setContextMenu(contextMenu);

    // todo: icon changeer fonksiyonu yazilmali

    // animation icin
    // https://github.com/electron/electron/issues/12873

    // icon changer start

    let trayIcon2 = nativeImage.createFromPath(trayIconPath('traySingle.png'));
    trayIcon2 = trayIcon2.resize({ width: 18, height: 18 });
    setTimeout(() => {
      this.tray.setImage(trayIcon2);
    }, 5000);

    // icon changer end
    return this.tray;
  }
}
