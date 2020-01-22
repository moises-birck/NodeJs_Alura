const express = require('express');

const app = express();

app.listen(3000, function(){
	console.log("server running in port 3000");
});

const rotas = require('../app/rotas/rotas.js');
rotas(app);

module.exports = app;