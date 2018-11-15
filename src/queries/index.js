const knex = require('../db'); // the connection!

module.exports = {
  update(id, bills) {
    return knex('bills')
      .where('id', id)
      .update(bills, '*');
  },
  delete(id) {
    return knex('bills')
      .where('id', id)
      .del();
  },
};
