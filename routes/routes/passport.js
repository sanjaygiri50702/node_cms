var passport = require('passport');
var User = require('../../model/Users')
var localStrategy = require('passport-local');
passport.serializeUser(function (user, done) {
  console.log('serializing user');
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    console.log('deserializing user');
    user.password='';
    done(err, user);
  });
});



passport.use('local', new localStrategy({
  usernameField: 'email'
},
  function (username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) return done(err);
      if (!user) {
        console.log('user not found')
        return done(null,false,{error:'user not found'})
      }
      console.log('user found');


      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err)
        if (!isMatch) {
          console.log('password not match')
          return done(null, false,{error:'password not match'})
        }

        console.log('password match');
        return done(null, user)

      });
    });
  }));
module.exports = passport;