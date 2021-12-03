import { Router } from 'express';
import MainController from '../controllers/main.controller';
import Routes from '../interfaces/routes.interface';

class MainRoute implements Routes {
    public path = '/';
    public router = Router();
    public mainController = new MainController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.mainController.root);
    }
}

export default MainRoute;