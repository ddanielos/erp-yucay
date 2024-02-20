require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./app/utils/database')

const app = express();
const port = process.env.PORT || 3001;

//routes:
const documentTypeRouter = require('./app/router/documentType.router');
const rateRouter = require('./app/router/rate.router');
const productRouter = require('./app/router/product.router')

app.use(morgan("dev"));
app.get("/", (req, res)=>{
    res.send("This is express App")
});
app.use(express.json()) //interprete para recibir datos json por el body de la request
app.use("/api/v1", documentTypeRouter);
app.use("/api/v1", rateRouter);
app.use("/api/v1", productRouter);

sequelize.sync()
    .then(()=>{
        app.listen(port,()=>{
            console.log(`-------Server running on port ${port}`)
        })
    }).catch((err)=>{
        console.log('error synchronizing the database',err)
    })
