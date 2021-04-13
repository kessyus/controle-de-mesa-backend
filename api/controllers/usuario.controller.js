const usuarioService = require('../services/usuario.service')

const autenticar = async (req, res, next) => {
    try{
        
        // console.log(req.body);
        
        const { usuario, senha } = req.body
        
        const result = await usuarioService.usuarioExiste( usuario, senha);
       

        if(!result)
        return res.status(401).send({
            mensagem: 'usuário ou senha invalidos'
        })
       
        res.status(200).send({
            mensagem: 'usuario autenticado com sucesso',
            token: 'dsjshgdjhag'  
        })
    } catch (error) 
    
    {
        console.log(error);
        // res.status(500).send({
        //     mensagem: 'error'
        // })
    }
    }

module.exports = {
    autenticar
}