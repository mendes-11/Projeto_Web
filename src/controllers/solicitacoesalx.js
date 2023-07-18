const pedido = require("../model/pedido");
const pedidoProdutos = require("../model/pedidoProduto");
const produtos = require("../model/produtos");
const colaborador = require("../model/colaborador");
const setores = require("../model/setores");
const passport = require("passport");

module.exports = {
  async Adm(req, res) {
    if(!req.session.edv){
      return res.redirect("/")
    }
    res.render("../views/solicitacoesalx");

  }
};
