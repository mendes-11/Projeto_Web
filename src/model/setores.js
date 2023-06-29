// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
// Criando a tabela Sala
const setores = database.define('Setores', {
    Id_Setores: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Setor: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Centro_Custo_Setor: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = setores;