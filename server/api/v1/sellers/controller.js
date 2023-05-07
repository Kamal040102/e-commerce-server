const Seller = require("./model")
const util = require("../../../utils/util")
const expressAsyncHandler = require("express-async-handler")
const toast = require("./../../../helpers/message.json")

exports.create = expressAsyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const newSeller = await Seller.create(data);

        if (newSeller) {
            res.status(201).send(util.apiResponse(1, toast.SELLER_CREATED, newSeller))
        } else {
            res.status(403).send(util.apiResponse(0, toast.SELLER_NOT_CREATED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.delete = expressAsyncHandler(async (req, res) => {
    try {
        const sellerDeleted = await Seller.findByIdAndDelete(req.params.id)

        if (sellerDeleted) {
            res.status(200).send(util.apiResponse(1, toast.SELLER_DELETED))
        } else {
            res.status(403).send(util.apiResponse(0, toast.SELLER_NOT_DELETED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.update = expressAsyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const sellerUpdated = await Seller.findByIdAndUpdate(req.params.id, data, { new: true })

        if (sellerUpdated) {
            res.status(200).send(util.apiResponse(1, toast.SELLER_UPDATED, sellerUpdated))
        }
        else {
            res.status(403).send(util.apiResponse(0, toast.SELLER_NOT_UPDATED))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})

exports.index = expressAsyncHandler(async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id)

        if (seller) {
            res.status(200).send(util.apiResponse(1, toast.SELLER_FOUND, seller))
        }
        else {
            res.status(404).send(util.apiResponse(0, toast.SELLER_NOT_FOUND))
        }
    }
    catch (err) {
        res.status(500).send(util.apiResponse(0, err.message))
    }
})