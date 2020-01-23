const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../../models');

passport.use(new LocalStrategy(
  {usernameField: 'email'},
  async (email, password, done) => {
    try {
      const userRecord = await User.findOne(
        { where: {email} }
      );

      if (!userRecord || ! await userRecord.validPassword(password)) {
        return done(null, false, { message: 'Wrong credentials' });
      }
      return done(null, userRecord.toJSON());
    } catch(e) {
      return done(e);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user); 
  } catch (error) {
    done(error, false);
  }
});

module.exports = passport;
