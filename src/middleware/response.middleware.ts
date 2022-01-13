import {  Response } from "express";

export interface IJResponse{
    success:boolean,
    message:string,
    code:number,
    data:any;
}
export function JResponse(res:Response,data:IJResponse){
    res.status(data.code);
    return res.send(data)
}