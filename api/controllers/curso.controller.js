const db = require('../models/index');

const getAllCursos = (req, res) => {

  db.curso.findAll({})
    .then((dataFromDb) => {

      res.status(200).send(dataFromDb.map((item) => {

        return {
          id: item.id,
          name: item.name
        }

      }));

    })
}

const getCursoById = (req, res) => {
  db.curso.findOne({
    where: {
      id: req.params.idcurso
    }
  }).then((result) => {
    res.status(200).send({
      id: result.id,
      name: result.name
    });
  })

}

module.exports = {
  getAllCursos,
  getCursoById
}