const usuarioController = require('../../controllers/usuario.controller')
const Joi = require('joi');
const { validateDTO } = require('../../utils/middlewares.utils')

module.exports = (router) =>{

    router
        .route('/auth')
        .post(
            validateDTO('body', {
                senha: Joi.string().min(6).required().message({
                    'any.required': `"senha" é um campo obrigatório`
                }),
                usuario: Joi.string().required().message({
                    'any.required': `"usuário" é um campo obrigatório`
                }),
            }),
            usuarioController.autenticar
            );

}