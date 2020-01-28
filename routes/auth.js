import { Router } from 'express'; 
import AuthService from '../services/AuthService';
import User from '../models/user';

const authServiceInstance = new AuthService(User);

export default (app) => {
    const route  = Router();
    app.use('/', route);

    route.post('/login', (req, res) => {
        res.send('login');
    });

    route.post('/signup', async (req, res, next) => {
        try {
            const userDTO = req.body;
            const { user } = await authServiceInstance.signUp(userDTO);

            res.json(user);
        } catch (error) {
            
        }
    });

    route.get('/logout', (req, res) => {
        res.send('/logout');
    });
}
