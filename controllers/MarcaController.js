const database = require("../models");

class MarcaController {
  static async listaTodasMarcas(req, res) {
    try {
      const listaMarcas = await database.Marcas.findAll({
        include: [
          {
            model: database.Modelos,
            as: "modelos",
            include: [
              {
                model: database.Versoes,
                as: "versoes",
              },
            ],
          },
        ],
      });
      res.status(200).json(listaMarcas);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  static async listaComFiltro(req, res) {
    try {
        const { NomeMarca, NomeModelo, NomeVersao } = req.query;

        const where = {};
        
        if (NomeMarca) {
          where.NomeMarca = NomeMarca;
        }
        
        if (NomeModelo) {
          where['$modelos.NomeModelo$'] = NomeModelo;
        }
        
        if (NomeVersao) {
          where['$modelos.versoes.NomeVersao$'] = NomeVersao;
        }
        
        const listaMarcas = await database.Marcas.findAll({
          include: [
            {
              model: database.Modelos,
              as: 'modelos',
              include: [
                {
                  model: database.Versoes,
                  as: 'versoes'
                }
              ]
            }
          ],
          where: where
        });
        
        res.status(200).json(listaMarcas);
        
    } catch (error) {}
  }
  static async alteraMarca(req, res) {
    const { id } = req.params;
    const atualizaMarca = req.body;
    try {
      const marcaAtualizado = await database.Marcas.update(atualizaMarca, {
        where: { id: Number(id) },
      });
      res.status(200).json(marcaAtualizado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async cadastraMarca(req, res) {
    try {
      const novaMarca = req.body;
      const listaMarcaCadastrado = await database.Marcas.create(novaMarca);
      return res.status(200).json(listaMarcaCadastrado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = MarcaController;
