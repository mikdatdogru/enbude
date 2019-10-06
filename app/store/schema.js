exports.picksSchema = table => {
  table
    .increments('id')
    .unsigned()
    .primary();
  table.dateTime('createdAt').notNull();
  table.dateTime('updatedAt').nullable();
  table.string('data').notNull();
};
exports.optionsSchema = table => {
  table
    .increments('id')
    .unsigned()
    .primary();
  table.string('alias').nullable();
  table.dateTime('createdAt').notNull();
  table.dateTime('updatedAt').nullable();
  table.string('key').notNull();
  table.string('value').notNull();
};
