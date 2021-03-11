const db = require('../models/');

const getAllMesas = (req, res) => {

  db.mesas.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {

        return {
          id: item.id,
          numero: item.numero
        }

      }));

    })
}

module.exports = {
  getAllMesas
}