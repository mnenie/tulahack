import { Request,Response,NextFunction } from "express";
import Tag, {TagInput, TagOutput} from "../models/Tag";
import ApiError from "../errors/ApiError";

export default class TagController{
    static async create(req : Request, res : Response, next : NextFunction){
        try{    
            const tagAttr : TagInput = req.body as TagInput;
            if (!tagAttr.name){
                return next(ApiError.badRequest(`неправильное имя тэга`))

            }
            const tag = await Tag.create(tagAttr)
            return res.json(tag);
        }catch(e: any){
            next(ApiError.badRequest(`ошибка создания тэга ${e.message}`))
        }
    }  

    static async get(req : Request, res : Response, next : NextFunction){
        const tags = await Tag.findAll();
        return res.json(tags);
    }

    static async getOne(req : Request, res : Response, next : NextFunction){
        const tags = await Tag.findAll({where: {id: req.params.id}});
        return res.json(tags);
    }
}