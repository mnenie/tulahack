import express, { Request,Response,NextFunction } from "express"; 
import Event,{EventInput} from "../models/Event";
import ApiError from '../errors/ApiError';
import {resolve} from 'path';
import {v4} from "uuid";
import fileUpload from "express-fileupload";
export default class EventController{
   
    static async create(req : Request, res : Response, next : NextFunction){
        try{    
            const eventAttr : EventInput = req.body as EventInput;
            if (eventAttr.price === null) {
                eventAttr.price = 0;
            }   
            const {mainPic} : any = req.files ;
            if (mainPic === null || mainPic === undefined) {
                next(ApiError.badRequest(`нет картинки события`))
            }
            
            let fileName =  v4().toString() + ".jpg";
            await mainPic.mv(resolve(__dirname, "..", "static",  fileName));
            eventAttr.mainPic = fileName;
            const event = await Event.create(eventAttr);
            return res.json(event);
        }catch(e: any){
            next(ApiError.badRequest(`ошибка создания события ${e.message}`))
        }
    }  

    static async get(req : Request, res : Response, next : NextFunction){

    }

    static async getOne(req : Request, res : Response, next : NextFunction){

    }
}