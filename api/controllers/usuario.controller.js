const usuarioService = require('../services/usuario.service')

const autenticar = async (req, res, next) => {
    try{
        
        console.log(req.body);
        
        const { usuario, senha } = req.body

        if(!usuarioService.usuarioExiste(usuario, senha))
        res.status(401).send({
            mensagem: 'usuário ou senha invalidos'
        })
       
        res.status(200).send({
            mensagem: 'usuario autenticado com sucesso',
            token: 'dsjshgdjhag'  
        })
    } catch (error) {
        res.status(500).send({
            mensagem: 'Error'
        })
    }
    }

module.exports = {
    autenticar
}