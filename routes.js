//Imniciando Route do Express
const express = require('express');
const route = express.Router();


// Importando os Controllers
const home = require('./src/controllers/home');
const dashboard = require('./src/controllers/dashboard');
const carrinho = require('./src/controllers/carrinho');
const solicitacoesalx = require('./src/controllers/solicitacoesalx');
const concluido = require('./src/controllers/concluido');

// Iniciando as rotas
route
    .get('/', home.PagInicialGet)
    .get('/dashboard', dashboard.Tela)
    .post('/dashboard', dashboard.Pesquisa)
    .get('/Logout', dashboard.logout)
    .get('/carrinho/', carrinho.TelaCarrinho)
    .post('/carrinho/add', carrinho.ProdutoInsert)
    .get('/carrinho/remove/:id', carrinho.removerDoCarrinho)
    .get('/solicitacoesalx', solicitacoesalx.Adm)
    .post('/carrinho/insert', carrinho.pedidoInsert)
    .get('/concluido', concluido.Fim)

//Único post
route.post('/', home.PagIncialPost);


module.exports = route;