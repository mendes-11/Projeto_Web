const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const dashboard = require('./src/controllers/dashboard');
const carrinho = require('./src/controllers/carrinho');
// Iniciando as rotas

route.get('/', home.PagInicialGet);
route.post('/', home.PagIncialPost);

route.post('/dashboard', dashboard.Tela);
// route.post('/dashboard', dashboard)
route.get('/carrinho', carrinho.Carrinho);





module.exports = route;