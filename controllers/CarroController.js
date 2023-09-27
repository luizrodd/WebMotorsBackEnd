const database = require("../models");
const { Op } = require("sequelize");
class CarroController {
  static async listaBuscaCarro(req, res) {
    try {
      const {
        Localidade,
        Cambio,
        minQuilometragem,
        maxQuilometragem,
        cor,
        NomeVersao,
        NomeMarca,
        NomeModelo,
        minAnoModelo,
        maxAnoModelo,
        minPreco,
        maxPreco,
      } = req.query;

      const include = [];
      const where = {};
      if (Localidade) {
        where.Localidade = Localidade,
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      if (Cambio) {
        where.Cambio = Cambio;
      }
      if (minQuilometragem || maxQuilometragem) {
        where.Quilometragem = {};

        if (minQuilometragem) {
          where.Quilometragem[Op.gte] = minQuilometragem;
        }

        if (maxQuilometragem) {
          where.Quilometragem[Op.lte] = maxQuilometragem;
        }
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      if (minPreco || maxPreco) {
        where.preco = {};

        if (minPreco) {
          where.preco[Op.gte] = minPreco;
        }
        if (maxPreco) {
          where.preco[Op.lte] = maxPreco;
        }
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      if (minAnoModelo || maxAnoModelo) {
        where.anoModelo = {};

        if (minAnoModelo) {
          where.anoModelo[Op.gte] = minAnoModelo;
        }

        if (maxAnoModelo) {
          where.anoModelo[Op.lte] = maxAnoModelo;
        }

        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      if (cor) {
        where.Cor = cor;
      }
      if (NomeModelo) {
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
            where: {
              NomeModelo: NomeModelo,
            },
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      if (NomeVersao) {
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
            where: {
              NomeVersao: NomeVersao,
            },
          }
        );
      }
      if (NomeMarca) {
        include.push(
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
            where: {
              NomeMarca: NomeMarca,
            },
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          }
        );
      }
      const listaCarros = await database.Carros.findAll({
        include: include,
        where: where,
      });

      res.status(200).json(listaCarros);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar carros" });
    }
  }
  static async listaTodosCarros(req, res) {
    try {
      const ordenacao = req.query.ordenacao || "preco_ASC"; // Padrão para ordenar por preço em ordem crescente

      const [campoOrdenacao, ordem] = ordenacao.split("_");
      const listaCarros = await database.Carros.findAll({
        attributes: [
          "id",
          "Quilometragem",
          "Cor",
          "Carroceria",
          "Cambio",
          "foto",
          "preco",
          "anoFabricacao",
          "anoModelo",
          "Combustivel",
          "Localidade",
          "createdAt",
          "updatedAt",
        ],
        include: [
          {
            model: database.Marcas,
            as: "marcas",
            attributes: ["NomeMarca"],
          },
          {
            model: database.Modelos,
            as: "modelos",
            attributes: ["NomeModelo"],
          },
          {
            model: database.Versoes,
            as: "versoes",
            attributes: ["NomeVersao"],
          },
        ],
        order: [[campoOrdenacao, ordem]],
      });
      return res.status(200).json(listaCarros);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async listaCarro(req, res) {
    const { id } = req.params;
    try {
      const listaCarro = await database.Carros.findByPk(id);
      return res.status(200).json(listaCarro);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async cadastraCarro(req, res) {
    try {
      const novoCarro = req.body;
      const listaCarroCadastrado = await database.Carros.create(novoCarro);
      return res.status(200).json(listaCarroCadastrado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async deletaCarro(req, res) {
    const { id } = req.params;
    try {
      const apagaCarroCadastrado = await database.Carros.destroy({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Carro Deletado" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async alteraCarro(req, res) {
    const { id } = req.params;
    const atualizaCarro = req.body;
    try {
      const carroAtualizado = await database.Carros.update(atualizaCarro, {
        where: { id: Number(id) },
      });
      res.status(200).json(carroAtualizado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = CarroController;
