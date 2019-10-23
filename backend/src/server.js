const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const app = express();
const path = require("path");

// req.query = Acessar query params (para filtros)
// req.params = Acessar route  params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);