exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('picks')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('picks').insert([
        { createdAt: new Date(), data: 'rowValue1' },
        { createdAt: new Date(), data: 'rowValue2' },
        { createdAt: new Date(), data: 'rowValue3' }
      ]);
    });
};
