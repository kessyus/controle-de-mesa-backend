const { Router } = require('express');
const { name, version } = require('../../package.json');
const mesaRoutesV1 = require('../routes/v1/mesa');
const cardapioRoutesV1 = require('../routes/v1/cardapio');

module.exports = app => {
  const router = Router();

  router.route('/').get((req, res) => {
    res.send(`${name} and v${version}`);
  })

  // rotas
  mesaRoutesV1(router);
  cardapioRoutesV1(router);

  app.use('/v1', router);
}