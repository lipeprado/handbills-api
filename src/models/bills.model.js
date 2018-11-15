const Knex = require('../db');
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');
Bookshelf.plugin(require('bookshelf-uuid'));

export default Bookshelf.Model.extend({
  tableName: 'bills',
  uuid: true,
  hasTimestamps: true,
});
