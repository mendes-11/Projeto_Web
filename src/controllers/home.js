// const database = require('./src/config/db');
const passport = require("passport");
const colaborador = require("../model/colaborador");
const setores = require("../model/setores");

module.exports = {
  async PagInicialGet(req, res) {
    session = req.session;
    session.data = new Date();
    res.render("../views/inicial", { message: "" });
  },

  async PagIncialPost(req, res) {
    session = req.session;
    const edvs = req.body.edv;
    const centros = req.body.centroCusto;

    const colaboradores = await colaborador.findOne({
      raw: true,
      attributes: ["EDV"],
      where: { EDV: edvs },
    });
    if (!colaboradores) 
      return res.render("../views/inicial", { message: "Edv ou centro de custo inválido" });

    const setor = await setores.findOne({
      raw: true,
      attributes: ["Centro_Custo_Setor"],
      where: { Centro_Custo_Setor: centros },
    });
    if (!setor)
      return res.render("../views/inicial", {
        message: "Edv ou centro de custo inválido",
      });

    if(setor.Centro_Custo_Setor === 10){
      session.edv = colaboradores.EDV;
      session.setor = setor.Centro_Custo_Setor;
      console.log(session);
      return res.redirect("/solicitacoesalx");
    }
    else {
      session.edv = colaboradores.EDV;
      session.setor = setor.Centro_Custo_Setor;
      console.log(session);
      return res.redirect("/dashboard");
    }

  }
};
