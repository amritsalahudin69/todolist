const {router} = require ( 'express').Router();
const {UserModels} = require ( '../../database/models');

const {UserRepo} = require ( '../repositories');
const {UserServices, AuthSevice} = require ( '../services');
const {AuthCont} = require ( '../controllers');
const {validate} = require ('../middlewares');

const userRepo = new UserRepo(UserModels);
const userServices = new UserServices(userRepo);
const authService = new AuthSevice(userRepo);
const authCont = new AuthCont(userServices, authService)

const validation = new validate();

router.post('/register', validation.validate, authCont.register.bind(authCont));
// router.post('/login', userCon.masuk);

module.exports =router