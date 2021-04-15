const usuarioService = require('../services/usuario.service')

const autenticar = async (req, res, next) => {
    try{
                
        const { usuario, senha } = req.body
        
        const result = await usuarioService.usuarioExiste( usuario, senha);
       
        if(!result){
        return res.status(401).send({
            mensagem: 'usuário ou senha invalidos'
            })
        }
    
        var credencial = await usuarioService.criarCredencial(usuario); 
       
        res.status(200).send(credencial);

    } catch (error) 
    
    {
        res.status(500).send({
            mensagem: 'error'
        })
    }
    }

module.exports = {
    autenticar
}