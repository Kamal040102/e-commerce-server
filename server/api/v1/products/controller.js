const Product = require("./model")
const util = require("../../../utils/util")
const toast = require("../../../helpers/message.json")
const expressAsyncHandler = require("express-async-handler")

exports.create = expressAsyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const newProduct = await Product.create(data)

        if (newProduct) {
            res.status(201).send(util.apiResponse(1, toast.PRODUCT_CREATED, newProduct))
        } else {
            res.status(409).send(util.apiResponse(0, toast.PRODUCT_NOT_CREATED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.update = expressAsyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const updatesProduct = await Product.findByIdAndUpdate(req.params.id, data, { new: true })

        if (updatesProduct) {
            res.status(201).send(util.apiResponse(1, toast.PRODUCT_UPDATED, updatesProduct))
        } else {
            res.status(409).send(util.apiResponse(0, toast.PRODUCT_NOT_UPDATED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.delete = expressAsyncHandler(async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)

        if (deleteProduct) {
            res.status(201).send(util.apiResponse(1, toast.PRODUCT_DELETED))
        } else {
            res.status(409).send(util.apiResponse(0, toast.PRODUCT_NOT_DELETED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.index = expressAsyncHandler(async (req, res) => {
    try {
        const indexProduct = await Product.findById(req.params.id).populate("seller")

        if (indexProduct) {
            res.status(201).send(util.apiResponse(1, toast.PRODUCT_FOUND, indexProduct))
        } else {
            res.status(409).send(util.apiResponse(0, toast.PRODUCT_NOT_FOUND))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.indexAll = expressAsyncHandler(async (req, res) => {
    let query = {};
    if (req.query.query) {
        query.product_name = {
            "$regex": `${req.query.query}`,
            '$options': 'i'
        }
    }
    try {
        const indexProducts = await Product.find(query).populate("seller")
        res.status(200).send(util.apiResponse(1, toast.ALL_PRODUCT_LISTED, indexProducts))
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.cartItems = expressAsyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const cartProducts = await Product.find({ _id: data.productIds })
        res.status(200).send(util.apiResponse(1, toast.CART_PRODUCT_LISTED, cartProducts))
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})