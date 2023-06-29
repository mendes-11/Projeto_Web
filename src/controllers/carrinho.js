const colaborado = require('../model/colaborador');
const pedido = require('../model/pedido');
const pedidoProdutos = require('../model/pedidoProduto');
const produtos = require('../model/produtos');
const colaborador = require('../model/colaborador');
const setor = require('../model/setores');
const setores = require('../model/setores');

module.exports = {
    async carrinho(req, res) {
        res.render('../views/carrinho');
    },

}