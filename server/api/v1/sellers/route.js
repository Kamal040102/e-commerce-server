const sellerRouter = require("express").Router();
const seller = require("./controller")
const util = require("../../../utils/util")
const validation = require("./validation")

sellerRouter.get("/:id", seller.index);
sellerRouter.post("/", util.validate(validation.create), seller.create)
sellerRouter.put("/:id", util.validate(validation.update), seller.update)
sellerRouter.delete("/:id", seller.delete)

module.exports = sellerRouter;