const { mesa } = require('../models');

const mesaExiste = async (numero) => {
    const mesaDB = await mesa.findOne({
        where: {
            numero: numero
        },
    });

    return mesaDB ? true : false;

};

const criarMesa = (model) => {

    const modelParaMesa = {

        numero: model.numero,
        qtd_cadeiras: model.qtd_cadeiras,
        ambiente: model.ambiente

        };

    return mesa.create(modelParaMesa)

    }

module.exports = {
    mesaExiste,
    criarMesa
}
