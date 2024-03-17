const documentTypeRouter = require('./documentType.router');
const rateRouter = require('./rate.router');
const productRouter = require('./product.router');
const customerRouter = require('./customer.router');
const sellerRouter = require('./seller.router');
const saleTypeRouter = require('./saleType.router');
const warehouseRouter = require('./warehouse.router');
const locationRouter = require('./location.router');
const paymentMethodRouter = require('./paymentMethod.router');
const saleRouter = require('./sale.router');
const saleItemRouter = require('./saleItem.router');
const paymentRouter = require('./payment.router');
const payItemRouter = require('./payItem.router');

function routerApi(app){
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
}

module.exports = routerApi;