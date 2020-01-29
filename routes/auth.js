import { Router } from 'express'; 
import AuthService from '../services/AuthService';
import User from '../models/user';

import passport from 'passport';

const authServiceInstance = new AuthService(User);

export default (app) => {
    const route  = Router();
    app.use('/', route);

    route.post('/login', (req, res) => {
        res.send('login');
    });

    route.post('/signup', passport.authenticate('local-signup', {
        passReqToCallback: true,
    }), async (req, res, next) => {
        res.sendStatus(201);
    });

    route.get('/logout', (req, res) => {
        res.send('/logout');
    });
}
