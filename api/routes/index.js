const { Router } = require('express');
const { name, version } = require('../../package.json');
const mesaRoutesV1 = require('../routes/v1/mesa');
const cardapioRoutesV1 = require('../routes/v1/cardapio');
const usuarioRoutesV2 = require('../routes/v2/usuario')

module.exports = app => {
 
  //tiramos helth check do V1 e subimos para raiz
 app.get('/', (req, res, next) => {
    res.send(`${name} and v${version}`);
  })

  // rotas
 const routerV1 = Router();
  mesaRoutesV1(routerV1);
  cardapioRoutesV1(routerV1);
  app.use('/v1', routerV1);

 const routerV2 = Router();
 usuarioRoutesV2(routerV2);
  app.use('/v2', routerV2);
}