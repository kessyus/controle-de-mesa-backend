const { Router } = require('express');
const { name, version } = require('../../package.json');
const cursoRoutesV1 = require('../routes/v1/curso');
const mesaRoutesV1 = require('../routes/v1/mesa');

module.exports = app => {
  const router = Router();

  router.route('/').get((req, res) => {
    res.send(`${name} and v${version}`);
  })

  // rotas
  cursoRoutesV1(router);  
  mesaRoutesV1(router);

  app.use('/v1', router);
}