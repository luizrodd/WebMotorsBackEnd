const database = require('../models')
class VersaoController{
    static async cadastraversao(req, res) {
        try {
          const novoversao = req.body;
          const listaversaoCadastrado = await database.Versoes.create(novoversao);
          return res.status(200).json(listaversaoCadastrado);
        } catch (error) {
          res.status(500).json(error.message);
        }
      }
}

module.exports = VersaoController