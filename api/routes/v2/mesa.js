const mesaController = require('../../controllers/mesa.controller');
const { autorizar, validateDTO } = require('../../utils/middlewares.utils');
const Joi = require ('joi');

module.exports = (router) => {

  router.route('/mesa')
    .get(
      autorizar(),
      mesaController.getAllMesas
    )
    .post(
      autorizar(),
      validateDTO('body', {
        numero: Joi.number().integer().required(),
        qtd_cadeiras: Joi.number().integer().required(),
        ambiente: Joi.string().required()
      }),
      mesaController.criarMesa
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