const md5 = require('md5');
const jwt = require('jsonwebtoken');
const hashSecret = process.env.CRYPTO_KEY
const { usuarios } = require('../models')

// buscarPorNome = async (nome) => {
//     return usuarioDB = usuarios.findOne({
//         where: {
//             nome: nome
//         },
//     });
// }

const usuarioExiste = async (usuario, senha) => {
    const usuarioDB = await usuarios.findOne({
        where: {
            nome: usuario,
            senha: md5(senha + hashSecret)
       
        },
    });

    return usuarioDB ? true : false;
};

const criarCredencial = async (nomeUsuario) => {
    
    console.log('nomeUsuario:', nomeUsuario)

    // const usuario = await buscarPorNome(nomeUsuario)
    try {
        const usuario = await usuarios.findOne({
            where: {
                nome: nomeUsuario
            },
        });
        
        const { nome, tipo } = usuario
        
        console.log('usuario$', usuario);
        
        const credenciais = {
            token: jwt.sign({ nome: usuario.nome }, process.env.JWT_KEY, {
                expiresIn: '7200000ms'
            }),
            usuario: {
                nome,
                tipo
            }
        }
        
        console.log(credenciais)
        
        return credenciais

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    usuarioExiste,
    criarCredencial
}