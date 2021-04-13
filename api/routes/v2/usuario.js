const usuarioController = require('../../controllers/usuario.controller')
const { validateDTO } = require('../../utils/middlewares.utils')
const Joi = require('joi');

module.exports = (router) =>{

    router
        .route('/auth')
        .post(
            validateDTO('body', {
                senha: Joi.string().required().messages({
                    'any.required': `"senha" é um campo obrigatório`,
                    'string.empty': `"senha" não deve ser vazio`,
                    // 'string.min': `"senha" não deve ter menos que {#limit} caracteres`,
                }),
                usuario: Joi.string().required().messages({
                    'any.required': `"usuário" é um campo obrigatório`,
                    'string.empty': `"usuário" não deve ser vazio`,
                }),
            }),
            usuarioController.autenticar
            );

}