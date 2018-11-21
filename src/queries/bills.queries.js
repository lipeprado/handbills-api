import uuidv1 from 'uuid/v1';

// the connection!
const knex = require('../db');

module.exports = {
  getBillsByUserId(id, date) {
    console.log({ date });
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
