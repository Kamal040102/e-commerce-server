const product = require("./controller")
const util = require("../../../utils/util")
const productRouter = require("express").Router();
const validation = require("./validation")

productRouter.get("/", product.indexAll);
productRouter.get("/:id", product.index);
productRouter.post("/", util.validate(validation.create), product.create)
productRouter.put("/:id", util.validate(validation.update), product.update)
productRouter.delete("/:id", product.delete)
productRouter.post("/cartItems", util.validate(validation.cartItems), product.cartItems)

module.exports = productRouter;