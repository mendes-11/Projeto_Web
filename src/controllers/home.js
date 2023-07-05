// const database = require('./src/config/db');
const colaborador = require('../model/colaborador');
const setores = require('../model/setores');

module.exports = {
        async PagInicialGet(req, res) {
                res.render('../views/inicial', {message: ''});
            },
        
            async PagIncialPost(req, res) {
                const edvs = req.body.edv;
                const colaboradores = await colaborador.findOne({
                    raw: true,
                    attributes: ['EDV'],
                    where: { EDV: edvs }
                  });
                  console.log(colaboradores);
                if(!colaboradores) return res.render('../views/inicial', {message: 'EDV inválido'});

                if(colaboradores.EDV == edvs ){
                    const centros = req.body.centroCusto
                    const setor = await setores.findOne({
                        raw: true,
                        attributes: ['Centro_Custo_Setor'],
                        where: { Centro_Custo_Setor: centros }
                      });

                    if(!setor) return res.render('../views/inicial', {message: 'Centro de custo é inválido'});

                    if (setor.Centro_Custo_Setor == centros){
                         res.redirect('/dashboard');
                    }
                }
            }
}
