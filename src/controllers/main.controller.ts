import { NextFunction, Request, Response } from 'express';
import { JsonResult } from '../utils/response.middleware';

class MainController {
    public root = async (req: Request, res: Response, next: NextFunction) => {
        return new JsonResult(res).send(200, "success", {})
    };
}

export default MainController;
