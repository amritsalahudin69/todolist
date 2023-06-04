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
            const string = payload.code.toString();
            const findUser = await this.userServices.findByString(string);
            if(findByString.status == true){
                throw new Error(400, 'Tidak dapat Daftar!')
            }

        }catch (error){
            next(error)
        }
    }
}

module.exports= AuthCont