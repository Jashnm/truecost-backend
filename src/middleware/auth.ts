import { NextFunction, Request, Response } from "express";

const protect = async (req: Request, res: Response, next: NextFunction) => {
    
    const apiKey = req.headers["authorization"]
    if(apiKey) {
        const decoded = Buffer.from(apiKey, 'base64').toString()
        
        req.apikey = decoded
        next()
    } else {
            res.status(401).json({message: "Unauthorized"}) 
        }
  
}

export default protect
