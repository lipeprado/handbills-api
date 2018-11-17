import uuidv1 from 'uuid/v1';
// the connection!
const knex = require('../db');

module.exports = {
  getBillsByUserId(userId) {
    return knex('bills')
      .where('userId', userId)
      .orderBy('created_at', 'desc');
  },
  create(bill) {
    return knex('bills')
      .returning(['id'])
      .insert({ ...bill, id: uuidv1() });
  },
  update(id, bills) {
    return knex('bills')
      .where('id', id)
      .update(bills, '*');
  },
  getOne(id) {
    return knex('bills')
      .where('id', id)
      .first();
  },
  delete(id) {
    return knex('bills')
      .where('id', id)
      .del();
  },
};
