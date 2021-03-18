const { mesa, cardapios, mesaCardapio } = require('../models');

const getAllMesas = async (req, res, next) => {

  const result = await mesa.findAll({});

  res.status(200).send(result.map(item => {

    const { id, numero, qtd_cadeiras, ambiente } = item;

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
          model: cardapios
        }
      }
    });

    res.status(200).send(result);
   
  } catch (error) {
    
    console.log(error);
    res.status(500).send({ message: `Tabela ${req.params.id} não foi encontrada.` });

  }
}

const postCadastroPedido = async (req, res, next) => {

  try {
    
    // construir o model para incluir no cadastro
    const model = {
      status: true,
      id_cardapio: req.body.idcardapio,
      id_mesa: req.body.idmesa,
      dateTime: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    // grava no banco
    await mesaCardapio.create(model);
    
    res.status(200).send({ message: 'Pedido gravado com sucesso.' });
    
  } catch (error) {
   
    console.log(error);
    res.status(500).send({ message: 'Erro interno do servidor.' });

  }
}

const deletePedido = async (req, res, next) => {

  try {
   
    await mesaCardapio.destroy({
      where: {
        id: req.body.idpedido
      }
    });

    res.status(200).send({ message: 'Pedido excluído com sucesso.' });

  } catch (error) {
    
    console.log(error);
    res.status(500).send({ message: 'Erro interno do servidor.' });
  }
}

module.exports = {
  getAllMesas,
  getMesaById,
  postCadastroPedido,
  deletePedido
}