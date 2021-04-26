const mesaController = require('../../controllers/mesa.controller');
const { autorizar, validateDTO } = require('../../utils/middlewares.utils');
const Joi = require ('joi');

module.exports = (router) => {

  router
    .route('/mesa')
    .get(
      autorizar('LISTAR_MESA'),
      mesaController.getAllMesas
    )
    .post(
      autorizar('CRIAR_MESA'),
      validateDTO('body', {
        numero: Joi.number().integer().required(),
        qtd_cadeiras: Joi.number().integer().required(),
        ambiente: Joi.string().required()
      }),
      mesaController.criarMesa
    )
  
  router
    .route('/mesa/:id')
    .get(
      autorizar('LISTAR_MESA'),
      mesaController.getMesaById
      )
    .put(
      autorizar('ALTERAR_MESA'),
      mesaController.alterarMesa
      )

  router
    .route('/mesa/:id/insert')
    .post(
      autorizar('FAZER_PEDIDO'),
      mesaController.postCadastroPedido
      )
    
  router
    .route('/mesa/delete/:id')
    .delete(
      autorizar('DELETAR_PEDIDO'),
      mesaController.deletePedido
      )
}