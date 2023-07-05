const express = require('express');
const multer = require("multer");
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');

const dashboard = require('./src/controllers/dashboard');

const carrinho = require('./src/controllers/carrinho');

const config = require('./src/config/multer');

// Iniciando as rotas

route.get('/', home.PagInicialGet);
route.post('/', home.PagIncialPost);


route.get('/dashboard', dashboard.Tela);
route.get('/Logout', dashboard.logout)

route.get('/carrinho/', carrinho.TelaCarrinho);
route.post('/carrinho/add', carrinho.ProdutoInsert);
route.get('/carrinho/remove/:id', carrinho.removerDoCarrinho);
// route.post('/dashboard', multer(config).single('foto'), dashboard.Tela);



module.exports = route;