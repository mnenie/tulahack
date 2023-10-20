import {Router} from 'express';
import UserController from '../controllers/UserController';
const router = Router();

router.get('/user/register', UserController.register);