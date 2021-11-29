import express from 'express';

export class Server {
    app: express.Application = express();

    configurationServer() {
        this.app.use("/", function (req, res) {
            res.send(200);
        })
    }

    createServer() {
        this.app.listen(3000, function () {
            console.log("server listening on port 3000");
            this.configurationServer();
        })

    }

}

