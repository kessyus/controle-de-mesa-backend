const cardapioController = require('../../controllers/cardapio.controller');
const { autorizar, validateDTO } = require('../../utils/middlewares.utils');
const Joi = require ('joi');

module.exports = (router) => {

  router.route('/cardapio')
    .get(
      cardapioController.getAllCardapio
    )
    .post(
      autorizar('CRIAR_ITEM_CARDAPIO'),
      validateDTO('body', {
        produto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string(),
        categoria: Joi.string().required(),
      }),
      cardapioController.criarCardapio
    );
  
  router.route('/cardapio/:id')
    .get(
      cardapioController.getCardapioById
    )
    .put(
      autorizar(),
      validateDTO('params', {
        id: Joi.number().integer().required().messages({
          'any.required': `"id" é um campo obrigatório`,
          'number.base': `"id" deve ser um número`,
          'number.integer': `"id" deve ser um número válido`
        })
      }),
      validateDTO('body', {
        produto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string(),
        categoria: Joi.string().required(),
      }),
      cardapioController.alterarItem
    )
}