const { cardapios } = require('../models');


const itemExiste = async (produto) => {
    const cardapioDB = await cardapios.findOne({
        where: {
            produto: produto
        },
    });

    return cardapioDB ? true : false;

};

const criarItem = (model) => {

    const modelParaItem = {

        produto: model.produto,
        preco: model.preco,
        descricao: model.descricao,
        categoria: model.categoria
        };

    return cardapios.create(modelParaItem)

    }

module.exports = {
    itemExiste,
    criarItem
}