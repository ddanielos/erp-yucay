require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./app/utils/database');

const app = express();
const port = process.env.PORT || 3001;
const routerApi = require('./app/routes');
//routes:
/*
const documentTypeRouter = require('./app/routes/documentType.router');
const rateRouter = require('./app/routes/rate.router');
const productRouter = require('./app/routes/product.router');
const customerRouter = require('./app/routerscustomer.router');
const sellerRouter = require('./app/routes/seller.router');
const saleTypeRouter = require('./app/routes/saleType.router');
const warehouseRouter = require('./app/routes/warehouse.router');
const locationRouter = require('./app/routerslocation.router');
const paymentMethodRouter = require('./app/routes/paymentMethod.router');
const saleRouter = require('./app/routes/sale.router');
const saleItemRouter = require('./app/routes/saleItem.router');
const paymentRouter = require('./app/routes/payment.router');
const payItemRouter = require('./app/routes/payItem.router');
*/

app.use(morgan("dev"));
app.get("/", (req, res)=>{
    res.send("This is express App")
});
app.use(express.json()); //interprete para recibir datos json por el body de la request

/*
app.use("/api/v1", documentTypeRouter);
app.use("/api/v1", rateRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", customerRouter);
app.use("/api/v1", sellerRouter);
app.use("/api/v1", saleTypeRouter);
app.use("/api/v1", warehouseRouter);
app.use("/api/v1", locationRouter);
app.use("/api/v1", paymentMethodRouter);
app.use("/api/v1", saleRouter);
app.use("/api/v1", saleItemRouter);
app.use("/api/v1", paymentRouter);
app.use("/api/v1", payItemRouter);
*/

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
