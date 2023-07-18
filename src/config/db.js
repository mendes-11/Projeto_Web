// const sequelize = require('sequelize');
// //configurações da base de dados
// const database = new sequelize('AlmoxarifadoBosch', 'ProjWeb', '1234567',
// {
// dialect: 'mssql', host:'localhost', port: 50846
// });
// database.sync();
// module.exports = database;

const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('AlmoxarifadoBosch', 'ProjAlmox123', '1234567',
{
dialect: 'mssql', host:'localhost', port: 56732
});
database.sync();
module.exports = database;