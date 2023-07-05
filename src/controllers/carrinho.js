const colaborado = require('../model/colaborador');
const pedido = require('../model/pedido');
const pedidoProdutos = require('../model/pedidoProduto');
const produtos = require('../model/produtos');
const colaborador = require('../model/colaborador');
const setor = require('../model/setores');
const setores = require('../model/setores');

var carrinhoProdutos = [];




module.exports = {
  async TelaCarrinho(req, res) {
    const Qnt_produto = await pedidoProdutos.findAll({ raw: true, attributes: ['Quantidade_Pedido'] })
    const produto = await produtos.findAll({ raw: true, attributes: ['Id_Produtos', 'Norma', 'Descricao', 'Nome', 'Foto'] });
    res.render('../views/carrinho', { produto: carrinhoProdutos });
  },
  async ProdutoInsert(req, res) {
    const id = req.body.Id_Produto;
    const p = await produtos.findOne({ raw: true, attributes: ['Id_Produtos', 'Norma', 'Descricao', 'Nome', 'Foto'], where: { Id_Produtos: id } });
    carrinhoProdutos.push(p);
    res.redirect('/carrinho');
  },

  async removerDoCarrinho(req, res) {
    var carrinhoTemp = [];

    for (let i = 0; i < carrinhoProdutos.length; i++) {
      if (i != req.params.id) {
        carrinhoTemp.push(carrinhoProdutos[i])
      }
    }

    carrinhoProdutos = carrinhoTemp;

    res.redirect('/carrinho');

  },





}