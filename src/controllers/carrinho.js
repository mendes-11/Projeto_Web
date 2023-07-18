const pedido = require("../model/pedido");
const pedidoProdutos = require("../model/pedidoProduto");
const produtos = require("../model/produtos");
const colaborador = require("../model/colaborador");
const setor = require("../model/setores");



var carrinhoProdutos = [];

module.exports = {
  async TelaCarrinho(req, res) {
    if (!req.session.edv) {
      return res.redirect("/");
    }
    res.render("../views/carrinho", { produto: carrinhoProdutos });
  },

  async ProdutoInsert(req, res) {
    const idProduto = req.body.Id_Produto;
    const p = await produtos.findOne({
      raw: true,
      attributes: ["Id_Produtos", "Norma", "Descricao", "Nome", "Foto"],
      where: { Id_Produtos: idProduto },
    });
    carrinhoProdutos.push(p);
    req.session.carrinho = carrinhoProdutos;
    console.log(req.session);
    res.redirect("/carrinho");
  },

  async removerDoCarrinho(req, res) {
    const index = req.params.id;
    if (index >= 0 && index < carrinhoProdutos.length) {
      carrinhoProdutos.splice(index, 1);
    }
    res.redirect("/carrinho");
  },

  async pedidoInsert(req, res) {
    const session = req.session;
    if (!session.edv) {
      return res.redirect("/");
    }

    const c = await colaborador.findOne({
      raw: true,
      attributes: ["Id_Colaborador"],
      where: { EDV: session.edv },
    });

    session.data = new Date();
    const p = await pedido.create({
      Data: session.data,
      Centro_CustoPedido: session.setor,
      Id_Colaborador: c.Id_Colaborador,
      Id_Funcionario: null,
    });

    for (let i = 0; i < carrinhoProdutos.length; i++) {
      const valorInput = req.body.valor[i];
      const pp = await pedidoProdutos.create({
        Quantidade_Pedido: valorInput,
        Id_Pedido: p.Id_Pedido,
        Id_Produto: carrinhoProdutos[i].Id_Produtos, // Modificação: usar o ID do produto correto
      });
    }

    carrinhoProdutos = []; // Limpa o carrinho após a inserção da solicitação

    return res.redirect("/concluido");
  },
};
