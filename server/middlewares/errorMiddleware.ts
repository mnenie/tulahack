import ApiError from "../errors/ApiError"
import { Request,Response,NextFunction } from "express"

export default function (err : Error, req : Request, res : Response, next : NextFunction) {
    if (err instanceof ApiError) {
        console.error(err.message)
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}
