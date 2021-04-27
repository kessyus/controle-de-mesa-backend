const { usuarios }  = require('../models');
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
        });
    }
}

const criarFuncionario = async (req, res, next) => {
    
    try {
        const { body } = req;
        const validarFuncionario = await usuarioService.funcionarioJaExiste(body.nome);

        if (validarFuncionario) {
            return res.status(400).send({
                mensagem: "Funcionário já cadastrado"
            });
        }
        await usuarioService.criarFuncionario(body)
        
        res.status(200).send({
            mensagem: "cadastro realizado"
        })
        
    } catch (error) {
        res.status(500).send({
            mensagem: 'error'
        });
    } 
    
}

const listarFuncionarios = async (req, res, next) => {
    
    const funcionarios = await usuarioService.listarFuncionarios();

    return res.status(200).send(funcionarios);
}

const alterarFuncionario = async (req, res, next) => {
    const { body, params } = req;
  
    await usuarioService.alterarFuncionario(params.id, body);

    return res.status(200).send({
        mensagem: 'Alteração realizada'
    })
}

const deletarFuncionario = async (req, res, next) => {
    const { id } = req.params
    console.log( usuarios );
    try {
        await usuarios.destroy({
            where:{
                id: id
            }
        })
        
        return res.status(200).send({
            mensagem: 'Usuário deletado'
        })
    } catch (error) {
       console.log(error); 
    }

}

module.exports = {
    autenticar,
    criarFuncionario,
    listarFuncionarios,
    alterarFuncionario,
    deletarFuncionario
}