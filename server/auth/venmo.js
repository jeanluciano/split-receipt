const passport = require('passport')
const router = require('express').Router()
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models');

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

const venmoConfig = {
  clientID: process.env.VENMO_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK,
};

// const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
//   const googleId = profile.id;
//   const name = profile.name;
//   const firstName = name.givenName;
//   const lastName = name.familyName;
//   const email = profile.emails[0].value;
//   console.log("**GOOGLE CONFIG", profile);

//   User.find({where: {googleId}})
//     .then(user => user ?
//       done(null, user) :
//       User.create({firstName, lastName, email, googleId})
//         .then(user => done(null, user))
//     )
//     .catch(done);
// });

// passport.use(strategy);
router.get('/',
  axios.get(`https://api.venmo.com/v1/oauth/authorize?client_id=${clientID}&scope=<scopes>`)
    .then(res => res.data)
    .catch(err);
  )

// router.get('/', passport.authenticate('google', { scope: 'email' }));

router.get('/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
}));
