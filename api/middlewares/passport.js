const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../../models');
console.log(typeof User.validPassword);

passport.use(new LocalStrategy(
  {usernameField: 'email'},
  async (email, password, done) => {
    try {
      const userRecord = await User.findOne(
        { where: {email} }
      );
      //console.log(typeof user.validPassword());
      if (!userRecord || !userRecord.validPassword(password)) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      return done(null, userRecord);
    } catch(e) {
      return done(e);
    }
  }
));

module.exports = passport;
