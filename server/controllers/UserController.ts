import {Request,Response} from 'express';
import {sign} from 'jsonwebtoken';

const generateJwt = (id : number, email : string) => {
    return sign(
        {id, email},
        process.env.SECRET_KEY as string,
        {expiresIn: '24h'}
    )
}

class UserController{
    static async register(req: Request, res: Response){
        try{

        }catch(err){
        
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