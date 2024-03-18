require('dotenv').config();
const { Sequelize } = require('sequelize');
const {config} = require('../utils/database');

const db = {}

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

db.sequelize = sequelize;

module.exports = db;