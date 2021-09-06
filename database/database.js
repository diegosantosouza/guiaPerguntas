const Sequelize = require("sequelize");
const connection = new Sequelize('DB', 'USER', 'PASSWORD', {
    host:'localhost',
    dialect:'mysql'
});

module.exports =connection;