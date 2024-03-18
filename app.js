require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./app/utils/database');

const app = express();
const port = process.env.PORT || 3001;
const routerApi = require('./app/routes');

app.use(morgan("dev"));
app.get("/", (req, res)=>{
    res.send("This is express App")
});
app.use(express.json()); //interprete para recibir datos json por el body de la request

routerApi(app);

sequelize.sync()
//sequelize.sync({ force: true })
    .then(()=>{
        app.listen(port,()=>{
            console.log(`-------Server running on port ${port}`)
        })
    }).catch((err)=>{
        console.log('error synchronizing the database',err)
    });
