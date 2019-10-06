exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('options')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('options').insert([
        {
          createdAt: new Date(),
          alias: 'settings',
          key: 'theme',
          value: 'dark'
        },
        { createdAt: new Date(), alias: 'settings', key: 'startup', value: '1' }
      ]);
    });
};
