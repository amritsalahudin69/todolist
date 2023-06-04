const {Joi} = require ('joi')

const userSchema = Joi.object({
    payload: Joi.number()
        .max(4)
        .min(4)
        .required()
}).required()

module.exports = {userSchema}