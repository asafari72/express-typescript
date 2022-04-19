import { Response } from "express";

export class JsonResult {
    private _response: any;
    constructor(response: Response) {
        this._response = response;
    }
    public send(status: number, message: string, data: any) {
        this._response.status(status);
        return this._response.send({ status, message, data })
    }
}