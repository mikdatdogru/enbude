import clipboard from 'electron-clipboard-extended';

const initClipboard = mainWindow => {
  clipboard
    .on('text-changed', () => {
      const currentText = clipboard.readText();
      mainWindow.webContents.send('clipboard-text', currentText);
    })
    .once('text-changed', () => {
      console.log('TRIGGERED ONLY ONCE');
    })
    .on('image-changed', () => {
      const currentImage = clipboard.readImage();
      mainWindow.webContents.send(
        'clipboard-img',
        currentImage.toDataURL('image/png', '1')
      );
    })
    .startWatching();
};

export default initClipboard;
