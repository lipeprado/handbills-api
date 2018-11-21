/* eslint-disable */
const bcript = require('bcrypt');

const hashPass = bcript.hashSync('spacex', 10);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
          firstName: 'Elon',
          lastName: 'Musk',
          email: 'elon@spacex.com',
          password: hashPass,
        },
      ]),
    );
};
