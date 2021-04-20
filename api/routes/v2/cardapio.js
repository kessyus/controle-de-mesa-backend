const cardapioController = require('../../controllers/cardapio.controller');
const { autorizar, validateDTO } = require('../../utils/middlewares.utils');
const Joi = require ('joi');

module.exports = (router) => {

  router.route('/cardapio')
    .get(
      cardapioController.getAllCardapio
    )
    .post(
      autorizar(),
      validateDTO('body', {
        produto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string().required(),
        categoria: Joi.string().required(),
      }),
      cardapioController.criarCardapio
    );
  
  router.route('/cardapio/:id')
    .get(
      cardapioController.getCardapioById
    )
    
}