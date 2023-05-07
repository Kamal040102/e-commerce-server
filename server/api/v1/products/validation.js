const Joi = require("joi")

exports.create = {
    body: Joi.object().keys({
        product_name: Joi.string().required(),
        product_category: Joi.string().required().valid("Electronics", "Fashion", "Mobiles & Accessories", "Laptop & Accessories"),
        product_price: Joi.number().default(0),
        product_description: Joi.string().max(1080),
        product_images: Joi.array(),
        seller: Joi.string().required()
    })
}

exports.update = {
    body: Joi.object().keys({
        product_name: Joi.string(),
        product_category: Joi.string().valid("Electronics", "Fashion", "Mobiles & Accessories", "Laptop & Accessories"),
        product_price: Joi.number().default(0),
        product_description: Joi.string().max(1080),
        product_images: Joi.array(),
        seller: Joi.string()
    })
}