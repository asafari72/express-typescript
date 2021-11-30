import express from 'express';
import mongoose from 'mongoose';
import morgan from "morgan";
import bodyParser from 'body-parser';

import { port, dbConnectionString } from "../config.json";

import Routes from './interface/routes.interface';

export class Application {

    app: express.Application = express();
    port: number = port;

    constructor(routes: Routes[]) {
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        // this.initalizeDataBaseConnection();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
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
        mongoose.connect(dbConnectionString);
    }
}


