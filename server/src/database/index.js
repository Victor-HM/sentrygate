const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Aluno');
const Responsavel = require('../models/Responsavel');
const Conta = require('../models/Conta');

// Criando uma const para usar a configuração que usei para conectar com o banco de dados
const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Responsavel.init(connection);
Conta.init(connection);

Aluno.associate(connection.models);
Responsavel.associate(connection.models);
Conta.associate(connection.models);


module.exports = connection;