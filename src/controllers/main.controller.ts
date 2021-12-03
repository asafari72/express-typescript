import { NextFunction, Request, Response } from 'express';

class MainController {
    public root = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200)
        return res.json({
            status: 200,
            message: "OK"
        })
    };
}

export default MainController;