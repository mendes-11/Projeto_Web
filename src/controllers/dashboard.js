const colaborado = require('../model/colaborador');
const pedido = require('../model/pedido');
const pedidoProdutos = require('../model/pedidoProduto');
const produtos = require('../model/produtos');
const colaborador = require('../model/colaborador');
const setor = require('../model/setores');
const setores = require('../model/setores');
const passport = require('passport');
// const carrinho  = require('../model/carrinho');

module.exports = {
    async Tela(req, res) {
        res.render('../views/dashboard');
    },
    async protection(req, res, next) {
        passport.authenticate('local', {
          successRedirect: '/dashboard',  
          failureRedirect: '/',          
          failureFlash: true,       
        })(req, res, next);
      },

    async Sair(req, res) {
        if (req.body.sair) {
          req.session.destroy(function (err) {
            if (err) {
              console.log(err);
            }
            res.render('../views/inicial'); 
          });
        } else {
          res.render('../views/dashboard'); 
        }
      },

      async CarrinhoGo(req, res) {
        if (req.body.carGo) {

          if (req.isAuthenticated()) {
            res.render('../views/carrinho');
          } else {
            res.redirect('/inicial'); 
          }
        } else {
          res.render('../views/dashboard');
        }
      }
      

    
}

