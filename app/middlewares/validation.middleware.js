const {userSchema} = require('../validations/schemas')

const UserSc = userSchema.userSchema;
const validate = async  (req, res, next) =>{
    try {
        const payload = req.body;
        // const payload = 1233;
        await UserSc(payload);
    }catch (error){
        next(error)
    }
}

// const validate = async (schema, bodies) => {
//     try {
//         await schema.validateAsync(bodies)
//     } catch (error) {
//         let messages = []
//
//         error.details.forEach(detail => {
//             messages.push({
//                 path: detail.path[0],
//                 message: detail.message
//             })
//         })
//
//         throw new Error(400, messages)
//     }
// }

module.exports = validate