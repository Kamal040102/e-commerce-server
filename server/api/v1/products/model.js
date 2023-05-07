const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_category: { type: String, required: true, enum: ["Electronics", "Fashion", "Mobiles & Accessories", "Laptop & Accessories"] },
    product_price: { type: Number, default: 0 },
    product_description: { type: String },
    product_images: [{ type: String }],
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;