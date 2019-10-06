const Knex = require('knex');
const knexfile = require('../knexfile');

const knex = Knex(knexfile[process.env.NODE_ENV]);

exports.tableCreator = (tableName, schema) => {
  knex.schema
    .hasTable(tableName)
    .then(exists => {
      if (exists) return;
      return knex.schema.createTable(tableName, schema);
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

exports.knex = knex;
