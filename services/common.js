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
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODQ5NGM2NDExN2U5NTdmYmEwMTYwNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzMjQ4OTE3fQ.fIVOnXOp2_eU0gXov82syuRYlPhKnLJ4LrkrMd0Rm4I"
  return token;
};