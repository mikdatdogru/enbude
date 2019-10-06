import clipboard from 'electron-clipboard-extended';
import { knex } from '../knex/knexFunctions';

const initClipboard = mainWindow => {
  clipboard
    .on('text-changed', () => {
      const currentText = clipboard.readText();
      const newData = {
        createdAt: new Date(),
        type: 'text',
        data: currentText
      };

      knex('picks')
        .insert({ ...newData })
        .then(result => {
          console.log(result);
          return result;
        })
        .catch(err => {
          return err;
        });

      mainWindow.webContents.send('clipboard-text', currentText);
    })
    .once('text-changed', () => {
      console.log('TRIGGERED ONLY ONCE');
    })
    .on('image-changed', () => {
      const currentImage = clipboard.readImage();
      const currentImageData = currentImage.toDataURL('image/png', '1');

      const newData = {
        createdAt: new Date(),
        type: 'text',
        data: currentImageData
      };

      knex('picks')
        .insert({ ...newData })
        .then(result => {
          console.log(result);
          return result;
        })
        .catch(err => {
          return err;
        });

      mainWindow.webContents.send('clipboard-img', currentImageData);
    })
    .startWatching();
};

export default initClipboard;
