const { mesa, cardapios, mesaCardapio } = require('../models');

const getAllMesas = async (req, res, next) => {

  const result = await mesa.findAll({});

  res.status(200).send(result.map(item => {

    const { id, numero, qtd_cadeiras, ambiente, ...resto } = item;

    return {
      id,
      numero,
      qtd_cadeiras,
      ambiente
    }

  }) || []);

}

const getMesaById = async (req, res, next) => {

  try {
  
    const result = await mesa.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: mesaCardapio,
        include: {
          model: cardapios,
          as: 'cardapio'
        }
      }
    });

    res.status(200).send(result);
   
  } catch (error) {
    
    console.log(error);
    res.status(500).send({ mensagem: 'Mesa não encontrada.' });

  }
}

module.exports = {
  getAllMesas,
  getMesaById
}
