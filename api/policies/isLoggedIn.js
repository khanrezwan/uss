module.exports = function isLoggedIn (req, res, next) {
//if no user logged in then redirect to login page

  if ( req.user ) {
   //verbose(req.user.name+" Logged in");
    next();
  }
  else
  {
    return res.redirect('/');
  }


};
