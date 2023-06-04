const {userSchema} = require('../validations/schemas')
const {Error} = require ('../helpers')

const UserSc = userSchema.userSchema;
const validate = async  (req, res, next) =>{
    try {
        const payload = req.body;
        await UserSc(payload);
    }catch (error){
        let messages = '';

        error.details.forEach(detail => {
            messages.push({
                path: detail.path[0],
                message: detail.message
            })
        })
        throw new Error(400, messages)
    }
}

module.exports = validate