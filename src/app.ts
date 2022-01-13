import express from 'express';
import mongoose from 'mongoose';
import morgan from "morgan";
import dotenv from "dotenv";

import Routes from './interfaces/routes.interface';
import path from 'path';
import { JResponse } from './middleware/response.middleware';


export class Application {

    app: express.Application = express();
    port: string = '3000';

    constructor(routes: Routes[]) {
        this.envConfig();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initalizeDataBaseConnection();
    }

    public listen() {
        this.port = process.env.PORT || '3000';
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }


    private envConfig() {
        const _path = path.resolve(__dirname, `./environment/${process.env.NODE_ENV}.env`)
        dotenv.config({ path: _path });

    }
    private initializeMiddlewares() {
        this.app.use(morgan("combined"))
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
    private initalizeDataBaseConnection() {
        mongoose.connect(process.env.DB || "");
    }
}


