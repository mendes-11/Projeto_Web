// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
// Criando a tabela Sala
const colaborador = database.define('Colaborador', {
    Id_Colaborador: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    EDV: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Centro_Custo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = colaborador;