const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
    console.log('tukii',token)
  }
  //TODO : this is temporary token for testing without cookie
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODVlZWVmNmZlZmVhMDM2YjkwZmU3ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzMjc2NDQxfQ.QW9cpMkBZAFbRt1fx8NP8hHWC-OR8-eb9nbh--rw2Po"
  return token;
};