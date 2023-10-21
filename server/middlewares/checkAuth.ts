import jwt from 'jsonwebtoken';
import {Response, Request, NextFunction} from 'express';

export default function (req : Request, res : Response, next : NextFunction){
    try{
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        const header = req.headers.authorization;
        if (!header) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const splited = header.split(' ');
        if (splited.length != 2 ) {
            return res.status(401).json({ message: 'Invalid type or token' });
        }
        const token = splited[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        res.cookie('payload', decoded, { maxAge: 900000, httpOnly: true });
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({ message: 'Invalid token' });
    }
}