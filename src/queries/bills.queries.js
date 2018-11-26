import uuidv1 from 'uuid/v1';

// the connection!
const knex = require('../db');

module.exports = {
  getBillsByUserId(id, date) {
    return knex('bills')
      .where({
        userId: id,
        month: date.month,
        year: date.year,
      })
      .orderBy('created_at', 'desc');
  },
  create(bill) {
    return knex('bills')
      .returning('*')
      .insert({ ...bill, id: uuidv1() });
  },
  update(id, bills) {
    return knex('bills')
      .where('id', id)
      .update(bills, '*');
  },
  updateStatus(id, status) {
    return knex('bills')
      .where('id', id)
      .returning('*')
      .update('status', !status);
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
