const pedido = require('../model/pedido');
const pedidoProdutos = require('../model/pedidoProduto');
const produtos = require('../model/produtos');
const colaborador = require('../model/colaborador');
const setores = require('../model/setores');
const passport = require('passport');


module.exports = {
  async Tela(req, res) {
    const produto = await produtos.findAll({ raw: true, attributes: ['Id_Produtos', 'Norma', 'Descricao', 'Nome', 'Foto'] });
    res.render('../views/dashboard', { produto });
  },

  async Adicionar(req, res) {
    const comprar = req.body.add;

  },

  async logout(req,res){
    res.redirect('/');
  },





  // async protection(req, res, next) {
  //   passport.authenticate('local', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/',
  //     failureFlash: true,
  //   })(req, res, next);
  // },

  // async Sair(req, res) {
  //   if (req.body.sair) {
  //     req.session.destroy(function (err) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       res.render('../views/inicial');
  //     });
  //   } else {
  //     res.render('../views/dashboard');
  //   }
  // },

}



