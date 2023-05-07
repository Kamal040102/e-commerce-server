const Joi = require("joi");

exports.create = {
    body: Joi.object().keys({
        seller_name: Joi.string().required(),
        seller_rating: Joi.number().min(0).max(5),
        seller_policies: Joi.array()
    })
}

exports.update = {
    body: Joi.object().keys({
        seller_name: Joi.string(),
        seller_rating: Joi.number().min(0).max(5),
        seller_policies: Joi.array()
    })
}