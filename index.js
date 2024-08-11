const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const questionarioRoute = require('./routes/questionarioRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json());

app.use('/questionario', questionarioRoute);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.log('Falha ao se conectar ao banco de dados', err));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});