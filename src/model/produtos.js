// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const colaborador = require('./colaborador');
// Criando a tabela Sala
const produtos = database.define('Produtos', {
    Id_Produtos: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Norma: {
        type: Sequelize.STRING(13),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    Nome: {
        type: Sequelize.STRING(32)
    }
});

module.exports = produtos;