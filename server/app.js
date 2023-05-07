const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sellerRouter = require("./api/v1/sellers/route");
const productRouter = require("./api/v1/products/route");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/seller", sellerRouter)
app.use("/api/v1/product", productRouter)

module.exports = app;