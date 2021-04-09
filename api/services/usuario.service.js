const md5 = require('md5'); //instalar md5
const hashSecret = process.env.CRYPTO_KEY

const data = [
    {
        nome: 'Fulano',
        senha: '123456'
    },
    {
        nome: 'Ciclano',
        senha: '567891'
    },
    {
        nome: 'Beltrano',
        senha: '135791'
    },
];

const usuarioExiste = (usuario, senha) => {

    //TODO: remover mock
   const usuario = data.find(item => {

       return ((item.nome.toLocaleUpperCase() === usuario.toLocaleUpperCase())
           && (item.senha === md5(senha + hashSecret)))

   });

    return usuario ? true : false;

}

module.exports = {
    usuarioExiste
}