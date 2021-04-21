const { cardapios } = require('../models');
const cardapioService = require('../services/cardapio.service')

const getAllCardapio = async (req, res, next) => {

  const result = await cardapios.findAll({});

  res.status(200).send(result.map(item => {

    const { id, produto, preco, descricao, categoria } = item;

    return {
      id,
      produto,
      preco,
      descricao,
      categoria
    }

  }) || []);

}

const getCardapioById = async (req, res, next) => {

  try {
    
    const result = await cardapios.findOne({
      where: {
        id: req.params.id
      }
    });

    res.status(200).send(result);

  } catch (error) {

    console.log(error);
    res.status(500).send({ message: `Item ${req.params.id} não foi encontrado.`});

  }

}

const criarCardapio = async (req, res, next) => {
  try {
    const { body } = req;
    const validarItem = await cardapioService.itemExiste(body.produto);
     
    if (validarItem) {
      return res.status(400).send({
        mensagem: "Item já cadastrada"
      });
    }
    await cardapioService.criarItem(body)
    
    res.status(200).send({
      mensagem: "item criada"
    })
    
  } catch (error) {
    res.status(500).send({
      mensagem: 'error'
    });
    console.log(error);
    }
}

module.exports = {
  getAllCardapio,
  getCardapioById,
  criarCardapio
}