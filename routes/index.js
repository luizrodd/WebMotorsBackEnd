const bodyParser = require('body-parser')
const carros = require('./carrosRoutes')
const marcas = require('./MarcasRoutes')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(carros)
    app.use(marcas)

}