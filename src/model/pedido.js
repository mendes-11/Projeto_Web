// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const colaborador = require('./colaborador');
// Criando a tabela Sala
const pedido = database.define('Pedido', {
    Id_Pedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Centro_CustoPedido: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

pedido.belongsTo(colaborador, {
    constraint: true,
    foreignKey: 'Id_Colaborador'
});
pedido.belongsTo(colaborador, {
    constraint: true,
    foreignKey: 'Id_Funcionario'
});
module.exports = pedido;