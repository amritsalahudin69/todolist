const {Error} = require ('../helpers');
const {jwt} = require ('jsonwebtoken');

require('dotenv').config();
const JWT_Key = process.env.JWT_Key;

const auth = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    let token = authHeader.split(' ')[1];
    if (token){
        token = jwt.verify(token, JWT_Key)
    }
    if(token){
        req.user = token
        next();
    }else{
        return new Error(422, 'token invalid');
    };
    
}

module.exports= {
    auth
}