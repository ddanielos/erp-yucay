const { Sequelize } = require('sequelize');
const config = require('../../config/config.json')['development'];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,       
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

module.exports = { sequelize, connectionTest };
//connectionTest()