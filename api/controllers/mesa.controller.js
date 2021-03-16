const db = require('../models/');

const getAllMesas = (req, res) => {

  db.mesa.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {
        return {
          id: item.id,
          numero: item.numero,
          qtd_cadeiras: item.qtd_cadeiras,
          ambiente: item.ambiente
        }

      }));
      
    })
}

const getMesaById = (req, res) => {
  db.mesa.findOne({
    where: {
      id: req.params.id
    }
  }).then((item) => {
    res.status(200).send({
        id: item.id,
      numero: item.numero,
      qtd_cadeiras: item.qtd_cadeiras,
      ambiente: item.ambiente,
    });
  })

}

module.exports = {
  getAllMesas,
  getMesaById
}
