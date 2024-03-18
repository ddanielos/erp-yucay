require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('../../config/config.json')['development'];

module.exports = config;
/*
{
    config,
    username: 'root',
    password: "root",
    database: "erp",
    host: "localhost",
    dialect:'mysql'
}
*/

/*
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        //dialect: "mysql"
    }
);

async function connectionTest(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.")
    } catch(err){
        console.error("Unable to connect to the database:", err)
    }
}

module.exports = { sequelize, config, connectionTest };
//connectionTest()

*/