import {Request,Response, NextFunction} from 'express';
import {sign} from 'jsonwebtoken';
import ApiError from '../errors/ApiError';
import User, {UserInput} from '../models/User';
import {hash, compareSync} from 'bcrypt'

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
            const userAttr = req.body as UserInput;
            if (!userAttr.email || !userAttr.password) {
                return next(ApiError.badRequest('Некорректный email или password'));
            }
            const candidate = await User.findOne({where: {email :userAttr.email}});
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }
            const hashPassword = await hash(userAttr.password, 5);
            userAttr.password = hashPassword;
            const user = await User.create(userAttr);
            const token = generateJwt(user.id, user.email);
            return res.json({token});
        }catch(err : any) {
            return next(ApiError.internal(`Непредвиденная ошибка: ${err.message}`));
        }
    }

    static async login(req: Request, res: Response, next: NextFunction){
            try{
                const {email, password} = req.body
                const user = await User.findOne({where: {email}})
                if (!user) {
                    return next(ApiError.internal('Пользователь не найден'))
                }
                let comparePassword = compareSync(password, user.password)
                if (!comparePassword) {
                    return next(ApiError.internal('Указан неверный пароль'))
                }
                const token = generateJwt(user.id, user.email)
                return res.json({token})
        }catch(err : any){
            return next(ApiError.internal(`Непредвиденная ошибка: ${err.message}`));
        }
    }
    
    //ToDo mail verification 
    static async verify(req: Request, res: Response){

    }
}