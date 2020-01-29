import express from 'express';
import routes from './routes';
import config from './config';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

async function startServer() {
    await require('./loaders').default();

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(session({
        secret: config.appKey,
        resave: false,
        saveUninitialized: false

    }))
    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/', (req, res) => {
        res.json(req.body);
    })

    app.use('/', routes())

    app.listen(config.port);
}

startServer();
