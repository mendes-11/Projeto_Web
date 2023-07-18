const pedido = require("../model/pedido");
const pedidoProdutos = require("../model/pedidoProduto");
const produtos = require("../model/produtos");
const colaborador = require("../model/colaborador");
const setores = require("../model/setores");
const passport = require("passport");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

module.exports = {
  async Tela(req, res) {
    if(!req.session.edv){
      return res.redirect("/")
    }
    const produto = await produtos.findAll({
      raw: true,
      attributes: ["Id_Produtos", "Norma", "Descricao", "Nome", "Foto"],
    });
    res.render("../views/dashboard", { produto });
  },

  async Pesquisa(req, res) {
    if(!req.session.edv){
      return res.redirect("/")
    }
    let pesquisa = req.body.pesquisa.toLowerCase();

    const produto = await produtos.findAll({
      raw: true,
      attributes: ["Id_Produtos", "Norma", "Descricao", "Nome", "Foto"],
      where: {
        [Op.or]: [ //adicionamos uma matriz ao Op.or que contém as condições para a coluna "Norma" e a coluna "Nome"
          Sequelize.where(Sequelize.fn("lower", Sequelize.col("Norma")), {
            [Op.substring]: pesquisa,
          }),
          Sequelize.where(Sequelize.fn("lower", Sequelize.col("Nome")), {
            [Op.substring]: pesquisa,
          }),
        ],
      },
    });

    res.render("../views/dashboard", { produto });
  },

  async Adicionar(req, res) {
    const comprar = req.body.add;
  },

  async logout(req, res) {
    req.session.destroy()
    res.redirect("/");
  },
};
