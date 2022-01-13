import { NextFunction, Request, Response } from 'express';
import { IJResponse, JResponse } from '../middleware/response.middleware';

class MainController {
    public root = async (req: Request, res: Response, next: NextFunction) => {
        const d: IJResponse = {
            code: 200,
            success: true,
            message: "Application worked!",
            data: {}
        }
        return JResponse(res, d)
    };
}

export default MainController;