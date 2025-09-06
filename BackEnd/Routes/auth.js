import express from 'express'
import { Logined, LogOut, registerNewUser } from '../controller/authcont.js';
import { Protect } from '../middleWare/protect.js';
import { getMe } from '../controller/getMe.js';

const AuthRout = express.Router();

AuthRout.post('/registration', registerNewUser)
AuthRout.post('/logins', Logined)
AuthRout.get('/logout', LogOut)
AuthRout.get('/me/',Protect,getMe)




export default AuthRout