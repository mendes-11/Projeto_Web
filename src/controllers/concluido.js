module.exports = {
  async Fim(req, res) {
    if (!req.session.edv) {
      return res.redirect("/");
    }

    res.render("../views/concluido");
  },
};
