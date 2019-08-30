module.exports = {
  index(req, res, next){
     res.render("static/", {title: "Welcome to Bloccit"});
  },
  about(req, res, next) {
    res.render("static/about", {h4: "About Us"});
  }
};
