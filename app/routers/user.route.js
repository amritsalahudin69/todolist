import {routerSatu} from 'express';
import {UserModels} from '../../database/models';

import {UserRepo} from '../repositories'
import {UserServices, AuthSevice} from '../services'
import {AuthCont} from '../controllers'

const router = routerSatu().Router();

const userRepo = new UserRepo(UserModels);
const userServices = new UserServices(userRepo);
const authService = new AuthSevice(userRepo);
const authCont = new AuthCont(userServices, authService)


router.post('/register', userCon.daftar);
router.post('/login', userCon.masuk);

module.exports =router