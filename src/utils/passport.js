import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import User from "../routes/user/userModel.js";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password",
    },
    async (mail, password, done) => {
      const user = await User.findOne({ mail });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        } else {
          return done("Wrong credentials");
        }
      } else {
        return done("Wrong credentials");
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
