module.exports = function isLoggedIn (req, res, next) {
//if no user logged in then redirect to login page

  if ( !req.user ) {
    return res.redirect('/');
  }


  next();
};
