const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Definicao da pagina inicial
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Adicionando as outras pastas do projeto no servidor
app.use(express.static(__dirname));


app.listen(port);
console.log('Server started at http://localhost:' + port);