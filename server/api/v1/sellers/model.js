const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    seller_name: { type: String, require: true },
    seller_rating: { type: Number, default: 0 },
    seller_policies: [{ type: String }]
}, {
    timestamps: true
})

const Seller = mongoose.model("Seller", sellerSchema)

module.exports = Seller;