import {Request,Response, NextFunction} from 'express';
import {sign} from 'jsonwebtoken';
import ApiError from '../errors/ApiError';
import User from '../models/User';
import {hash} from 'bcrypt'
const generateJwt = (id : number, email : string) => {
    return sign(
        {id, email},
        process.env.SECRET_KEY as string,
        {expiresIn: '24h'}
    )
}

export default class UserController{
    static async register(req: Request, res: Response, next : NextFunction){
        try{
            const {email, password, firstName, lastName, organization, avatar} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await hash(password, 5)
            const user = await User.create({email, password: hashPassword, firstName, lastName, organization, avatar})
            const token = generateJwt(user.id, user.email)
            return res.json({token})
        }catch(err : any) {
            return next(ApiError.internal(`Непредвиденная ошибка: ${err.message}`));
        }
    }

    static async login(req: Request, res: Response){
        try{
            
        }catch(err){
        
        }
    }

    static async getInfo(req: Request, res: Response){

    }
}