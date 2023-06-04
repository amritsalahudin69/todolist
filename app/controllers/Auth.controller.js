const {Response, Error} = require ('../helpers');

class AuthCont{
    constructor(userServices, authService, UserSchema) {
        this.authService    = authService
        this.userServices   = userServices
        this.UserSchema     = UserSchema
    }

    async register(req, res, next){
        try {
            const payload = req.body;

        }catch (error){
            next(error)
        }
    }
}

module.exports= AuthCont