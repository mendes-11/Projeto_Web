const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const dashboard = require('./src/controllers/dashboard');
const carrinho = require('./src/controllers/carrinho');
// Iniciando as rotas

route.get('/', home.pagInicialGet);
route.post('/', home.pagIncialPost);

route.get('/dashboard', dashboard.tela);
// route.post('/dashboard', dashboard)
route.get('/carrinho', carrinho.carrinho);





module.exports = route;