exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@email.com',
          password: '12345',
        },
        {
          id: '8c25f1b6-e85f-11e8-9f32-f2801f1b9fd1',
          firstName: 'Filipe',
          lastName: 'Prado',
          email: 'filipe@email.com',
          password: '12345',
        },
      ]);
    });
};
