import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import User from '../models/user';

const authServiceInstance = new AuthService(User);
const userServiceInstance = new UserService(User);

export default () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await userServiceInstance.findById(id);
            done(null, user);
        } catch(error) {
            done(error);
        }
    });


    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        }, async (req, email, password, done) => {
            try {
                const userDTO = req.body;
                const { user } = await authServiceInstance.signUp(userDTO);

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email, password, done) => {
            try {
                const credentialsDTO = { email, password };
                const { user } = await authServiceInstance.login(credentialsDTO);

                if(!user) return done(null, false, { message: "Wrong credentials" })

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    );
};
