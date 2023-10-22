import express, { Request,Response,NextFunction } from "express"; 
import Event,{EventInput} from "../models/Event";
import ApiError from '../errors/ApiError';
import {resolve} from 'path';
import seq from '../db/postgres';
import {v4} from "uuid";
import User from "../models/User";
export default class EventController{
   
    static async create(req : Request, res : Response, next : NextFunction){
        try{    
            const eventAttr  = req.body;
            if (eventAttr.price === null) {
                eventAttr.price = 0;
            }   
            const {mainPic} : any = req.files;
            if (mainPic === null || mainPic === undefined) {
                console.log("нет картинки")
                next(ApiError.badRequest(`нет картинки события`))
            }
            if (eventAttr.tags)
                eventAttr.tags = eventAttr.tags.split(',');
            let fileName =  v4().toString() + ".jpg";
            await mainPic.mv(resolve(__dirname, "..", "static",  fileName));
            eventAttr.mainPic = fileName;
            const event = await Event.create(eventAttr);
            return res.json(event);
        }catch(e: any){
            console.log(e.message);
            next(ApiError.badRequest(`ошибка создания события ${e.message}`))
        }
    }  

    static async get(req : Request, res : Response, next : NextFunction){
        try {
            const {name, startDate , endDate, location, organizerId} = req.query;
            const filter : any = {};
      
            if (startDate) {
              filter.startDate = { $gte: new Date(startDate as string) };
            }
            if (endDate) {
              filter.endDate = { $lte: new Date(endDate as string) };
            }
            if (name){
                filter.name = name;
            }
            if (location) {
                filter.location = location;
            }
            if (organizerId) {
                filter.organizerId = organizerId;
            }
            // if (tags) {
            //     const tagss = tags as string;
            //     const tagArray = tagss.split(',').map(tag => tag.trim()); 
            //     filter.tags = { $in: tagArray }; 
            // }
            const events = await Event.findAll({order: [['id', 'ASC']], where: filter });
            return res.json(events);
          } catch (error : any) {
            next(ApiError.internal(`${error.message}`));
          }
    }

    static async getOne(req : Request, res : Response, next : NextFunction){
        const {id} = req.params;
        const event = await Event.findOne({ where: { id: parseInt(id as string) } });
        if (!event) {
            return res.status(404).json({msg:`не существует такого события`});
        }
        const organizer = await User.findOne({where: {id : event?.organizerId}})
        return res.json({ event : event, organizer: organizer});     
    }

    static async register(req : Request, res : Response, next : NextFunction){
        try{
            const {participantId} = req.body;
            const {id} = req.params;
            const resp = await Event.update(
                {
                    participants: seq.literal(`array_append(participants, '${participantId}')`),
                },
                {
                  where: {
                    id: id,
                  },
            });
            return res.json(resp);  
        }catch(error : any) {
            next(ApiError.internal(`${error.message}`));
        }
    }

    static async getParticipants(req : Request, res : Response, next : NextFunction){
        try{

        }catch(e:any) {
            next(ApiError.internal(e.message));
        }
    }

    static async delete(req : Request, res : Response, next : NextFunction){
        try{
            const {id} = req.params;
            const event = await Event.findOne({where:{id}})
            if(event?.organizerId !== req.cookies.organizerId){
                return res.status(403).json({msg:"пользователь не организатор этого события"})
            }
            await event?.destroy();
            return res.json(event);
        }catch(e:any) {
            next(ApiError.internal(e.message));
        }
    }
}