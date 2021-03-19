# Controle de Mesa - Backend

Backend para um _aplicativo conceito_ de um sistema de restaurante. Segundo projeto do Bootcamp Full Stack Developer do Infnet. :wink:

Desenvolvedores:

- Gabriela Cristina Manzo da Silva - [Gitlab](https://gitlab.com/gabriela.silva)
- Kessyus Fófano dos Santos - [Gitlab](https://gitlab.com/kessyus)

## Instalação e início

```console
$ yarn install      # instala as dependências
$ yarn reset        # cria um banco de testes com as tabelas e dados fake
$ yarn start        # inicia o servidor
```

## Padrão de rotas

- GET
  - 'v?/mesa': Lista todas as mesas do restaurante.
  - 'v?/mesa/:id': Lista a mesa do id específico com todos os pedidos realizados pela mesa.
  - 'v?/cardapio': Lista todos os itens do cardápio do restaurante.
  - 'v?/cardapio/:id': Lista detalhes do item especificado pelo id.
- POST
  - 'v?/mesa/insert': Insere um novo pedido para a mesa. Necessário informar por POST o 'id_cardapio' e o 'idmesa'.
- DELETE
  - 'v?/mesa/delete/:id': Exclui um pedido de uma mesa.
