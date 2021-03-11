const mesaController = require('../../controllers/mesa.controller');

module.exports = (router) => {

  router.route('/mesa')
    .get(
      mesaController.getAllMesas
    )
  
  // router.route('/mesa/:idmesa')
  //   .get(
  //     // mesaController.getMesaById
  //   )
    
}