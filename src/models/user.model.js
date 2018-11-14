import bcrypt from 'bcrypt';
const Knex = require('../db');
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');
Bookshelf.plugin(require('bookshelf-uuid'));
Bookshelf.plugin(require('bookshelf-bcrypt'), {
  rounds: 10,
});

export default Bookshelf.Model.extend({
  tableName: 'users',
  uuid: true,
  bcrypt: { field: 'password' },
  hasTimestamps: true,
});

const encrypt = pass => bcrypt.hashSync(pass, 10);

const decrypt = (pass, hash) => bcrypt.compareSync(pass, hash);

export { encrypt, decrypt };
