import { Application } from './app';
import MainRoute from './routes/main.routes';

const app = new Application([
    new MainRoute()
])

app.listen();