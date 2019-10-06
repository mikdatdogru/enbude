// eslint-disable-next-line func-names

const { picksSchema, optionsSchema } = require('../store/schema');

exports.up = function(knex) {
  return knex.schema
    .createTable('picks', picksSchema)
    .createTable('options', optionsSchema);
};

// eslint-disable-next-line func-names
exports.down = function(knex) {
  return knex.schema.dropTable('picks').dropTable('options');
};
