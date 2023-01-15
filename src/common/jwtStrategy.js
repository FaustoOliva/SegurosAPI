import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import jwt from "jsonwebtoken";
import "dotenv/config";
import config from "../../config.js"


const opt = {
  secretOrKey: config.secretWord,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  algorithms: ["HS256"],
};

export const jwtStrategy = new Strategy(opt, (jwt_payload, done) => {
  if (!jwt_payload) {
    done(true);
  } else {
    done(null, jwt_payload);
  }
});

export const Authenticate = (req, res, next) => {
  console.log("This is a Authentification operation")
  passport.authenticate(jwtStrategy, (err, user) => {
    console.log("Usuario", user);
    if (err) res.status(401).send({ message: 'Unauthorized' });
    if (!user) res.status(401).send({ message: 'Unauthorized' });
    else {
      next();
    }
  })(req, res, next);
};

export const ValidateRoleUserAndAdmin = (req, res, next) => {
  console.log("This is a Role operation")
  passport.authenticate(jwtStrategy, (err, user) => {
    console.log("role", user)
    if (!user) res.status(401).send({ message: 'Unauthorized' });
    if(user.role == "user" || user.role == "admin") next()
    else {
      res.status(401).send({ message: 'Role Unauthorized' });
    }
  })(req, res, next);
}

export const ValidateRoleAdmin = (req, res, next) => {
 console.log("This is a Role admin operation")
  passport.authenticate(jwtStrategy, (err, user) => {
   console.log("role", user)
    if (!user) res.status(401).send({ message: 'Unauthorized' });
    if(user.role == "admin") next()
    else {
      res.status(401).send({ message: 'Role Unauthorized' });
    }
  })(req, res, next);
}