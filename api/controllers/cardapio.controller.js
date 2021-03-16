const db = require('../models/');

const getAllCardapio = (req, res) => {

  db.cardapio.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {
        return {
          id: item.id,
          produto: item.produto,
          preco: item.produto,
          descricao: item.descricao,
          categoria: item.categoria
        }

      }));
      
    })
}

const getCardapioById = (req, res) => {
  db.cardapio.findOne({
    where: {
      id: req.params.id
    }
  }).then((item) => {
    res.status(200).send({
      id: item.id,
      produto: item.produto,
      preco: item.produto,
      descricao: item.descricao,
      categoria: item.categoria
    });
  })

}

module.exports = {
  getAllCardapio,
  getCardapioById
}
