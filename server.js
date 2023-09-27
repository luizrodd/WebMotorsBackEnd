const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const corsOptions = {
    origin: '*', // Substitua pelo domínio do seu frontend
    optionsSuccessStatus: 200, // Algumas configurações adicionais
  };
  
  const app = express()
  const port = 8000
  
  app.use(cors(corsOptions));
routes(app)


app.listen(port, ()=>console.log('servidor conectado'))

module.exports = app