const md5 = require('md5');
const hashSecret = process.env.CRYPTO_KEY
const { usuarios } = require('../models')

// const data = [
//     {
//         nome: 'Fulano',
//         senha: md5('123456' + hashSecret)
//     },
//     {
//         nome: 'Ciclano',
//         senha: md5('123456' + hashSecret)
//     },
//     {
//         nome: 'Beltrano',
//         senha: md5('123456' + hashSecret)
//     },
// ];

const usuarioExiste = async (usuario, senha) => {
    const usuarioDB = await usuarios.findOne({
        where: {
            nome: usuario,
            senha: md5(senha + hashSecret)
        },
    });

    //TODO: remover mock
//    const usuarioDB = data.find(item => {

//        return ((item.nome.toLocaleUpperCase() === usuario.toLocaleUpperCase())
//            && (item.senha === md5(senha + hashSecret)))

//    });


    console.log(usuarioDB);

    return usuarioDB ? true : false;

}

module.exports = {
    usuarioExiste
}