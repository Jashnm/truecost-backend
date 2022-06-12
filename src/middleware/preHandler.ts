import { NextFunction, Request, Response } from "express";


export const preHandler = async (req: Request, res: Response, next: NextFunction) => {
    
    const {type} = req.params as  {type: 'flights' | 'commute' | 'transport'}
        if(type === 'flights'){
        if(req.apikey === process.env.FLIGHT_KEY) {
            next()
        } else {
            res.status(403).json({message: "INVALID_KEY"})
        }
    } else if (type === "commute") {
        if(req.apikey === process.env.COMMUTE_KEY)  next()
        else res.status(403).json({message: "INVALID_KEY"})   
    }
    else if(type === "transport") {
        if(req.apikey === process.env.TRANSPORT_KEY)  next()
        else res.status(403).json({message: "INVALID_KEY"})
    } 
    else {
        res.status(404).end()
    }

    
}
