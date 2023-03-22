//arquivo que faz conexao com o banco de dados
require("dotenv").config()

const Sequelize = require('sequelize') //ORN que auxilia na conexao com o banco de dados utilizando js
const connection = new Sequelize(process.env.DB_NAME,process.env.USER,process.env.PASSWORD, {  // constant que cria a conexao
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'mysql'
})

module.exports = connection; // exportar o modulo de conexao do banco de dados para poder utlizar o arquivo index.js
