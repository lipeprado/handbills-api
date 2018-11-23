/* eslint-disable */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills')
    .del()
    .then(() =>
      knex('bills').insert([
        {
          id: '85167096-edd5-11e8-8eb2-f2801f1b9fd1',
          title: 'Conta da Vivo',
          value: 6990,
          expire: '2018-11-15T09:00:00.000Z',
          month: '11',
          year: '2018',
          status: false,
          userId: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
        },
        {
          id: '85167352-edd5-11e8-8eb2-f2801f1b9fd1',
          title: 'Magazine Luiza',
          value: 13800,
          expire: '2018-11-15T09:00:00.000Z',
          month: '11',
          year: '2018',
          status: false,
          userId: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
        },
        {
          id: '851674a6-edd5-11e8-8eb2-f2801f1b9fd1',
          title: 'Lojas Camargos',
          value: 24150,
          expire: '2018-12-15T09:00:00.000Z',
          month: '12',
          year: '2018',
          status: false,
          userId: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
        },
        {
          id: '8516764a-edd5-11e8-8eb2-f2801f1b9fd1',
          title: 'Prestação do Carro',
          value: 63399,
          expire: '2018-12-10T09:00:00.000Z',
          month: '12',
          year: '2018',
          status: false,
          userId: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
        },
        {
          id: '85167c80-edd5-11e8-8eb2-f2801f1b9fd1',
          title: 'Revisão Carro',
          value: 27570,
          expire: '2018-11-10T09:00:00.000Z',
          month: '11',
          year: '2018',
          status: false,
          userId: 'bdd5c21a-edd5-11e8-8eb2-f2801f1b9fd1',
        },
      ]),
    );
};
