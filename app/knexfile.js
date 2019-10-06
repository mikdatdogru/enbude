const path = require('path');

const filePath = fileName =>
  process.env.NODE_ENV === 'production'
    ? path.join(__dirname, `./app.asar/app/store/dev.sqlite3/${fileName}`)
    : path.join(__dirname, `./react/store/${fileName}`);

// const dbDevPath = path.resolve(__dirname, 'store/dev.sqlite3');
// const dbProdPath = path.resolve(__dirname, 'store/prod.sqlite3');
const dbSeedPath = path.resolve(__dirname, 'store/seeds_dev');

const dbDevPath = filePath('dev.sqlite3');
const dbProdPath = filePath('prod.sqlite3');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: dbDevPath
    },
    seeds: {
      directory: dbSeedPath
    },
    useNullAsDefault: true
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: dbProdPath
    },
    useNullAsDefault: true
  }
};
