// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const pedido = require('./pedido');
const produtos = require('./produtos');
// Criando a tabela Sala
const pedidoProduto = database.define('PedidoProduto', {
    Id_PedidoProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Quantidade_Pedido: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

pedidoProduto.belongsTo(pedido, {
    constraint: true,
    foreignKey: 'Id_Pedido'
});
pedidoProduto.belongsTo(produtos, {
    constraint: true,
    foreignKey: 'Id_Produto'
});
module.exports = pedidoProduto;