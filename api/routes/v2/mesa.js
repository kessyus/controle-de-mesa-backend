const mesaController = require('../../controllers/mesa.controller');
const { autorizar } = require('../../utils/middlewares.utils')

module.exports = (router) => {

  router.route('/mesa')
    .get(
      autorizar(),
      mesaController.getAllMesas
    )
  
  router.route('/mesa/:id')
    .get(
      autorizar(),
      mesaController.getMesaById
    )

  router.route('/mesa/:id/insert')
    .post(
      autorizar(),
      mesaController.postCadastroPedido
    )
  
  router.route('/mesa/delete/:id')
    .delete(
      autorizar(),
      mesaController.deletePedido
    )
}