import { NextFunction, Request, Response } from "express";
import { ErrorWithStatusCode } from "./ErrorWithStatusCode";

export const errorHandler=(err:ErrorWithStatusCode, req:Request,res:Response,next:NextFunction)=>{
    const statusCode: number=err.statusCode||500;
    const message:string="Internal server Error"
    res.status(statusCode).json({error:message});

}