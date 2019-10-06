// Update with your config settings.
const path = require('path');

const dbDevPath = path.resolve(__dirname, 'store/dev.sqlite3');
const dbProdPath = path.resolve(__dirname, 'store/prod.sqlite3');
const dbSeedPath = path.resolve(__dirname, 'store/seeds_dev');
console.log(dbDevPath);
console.log(dbSeedPath);

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
