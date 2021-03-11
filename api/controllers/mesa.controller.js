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
      id: req.params.idmesa
    }
  }).then((result) => {
    res.status(200).send({
      id: result.id,
      numero: result.numero,
      qtd_cadeiras: result.qtd_cadeiras,
      ambiente: result.ambiente
    });
  })

}

module.exports = {
  getAllMesas,
  getMesaById
}