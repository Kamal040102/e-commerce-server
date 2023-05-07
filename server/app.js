const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sellerRouter = require("./api/v1/sellers/route");
const productRouter = require("./api/v1/products/route");
const util = require("./utils/util");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/seller", sellerRouter)
app.use("/api/v1/product", productRouter)

app.get("/api/v1/", (req, res) => {
    res.status(200).send(util.apiResponse(1, "Server is live."))
})

module.exports = app;