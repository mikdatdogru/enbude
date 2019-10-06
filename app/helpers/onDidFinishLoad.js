import { app } from 'electron';
import { knex, tableCreator } from '../knex/knexFunctions';
import { optionsSchema, picksSchema } from '../knex/schema';

const didFinishLoad = mainWindow => {
  if (!mainWindow) {
    throw new Error('"mainWindow" is not defined');
  }

  console.log('onDidFinishLoad');

  tableCreator('picks', picksSchema);
  tableCreator('options', optionsSchema);

  console.log('=====');
  console.log(app.getPath('home'));
  console.log('=====');

  knex('picks')
    .then(rows => {
      mainWindow.webContents.send('clipboard-all-data', rows);


      this.props.setAllClipboard(rows);
      return rows;
    })
    .catch(err => {
      debugger;

      return err;
    });

  if (process.env.ALWAYS_SHOW) {
    return;
  }

  if (process.env.START_MINIMIZED) {
    mainWindow.minimize();
  } else {
    mainWindow.hide();
    // mainWindow.focus();
  }
};

export default didFinishLoad;
