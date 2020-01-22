//impotanto o http
const http = require('http');

//retorna um obj server
//const server  = http.createServer();
const server  = http.createServer(function (req, resp) {
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Meu primeiro HTML em NodeJs </h1>
            </body> 
        </html>
    `);
});

//coloca o server na porta 3000 (padrão do node)
server.listen(3000);

//Acessar o navegador na url abaixo
http://localhost:3000

//Rodar no cmd: node server.js
//para parar a execução 
"ctrl" + "c"
//depois 
"enter"

//para inicializar projeto
npm init
//exemplo abaixo de como fica:

{
  "name": "nodeinit",
  "version": "1.0.0",
  "description": "curso alura",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Moises",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3"
  }
}


//instalar componenetes npm i {componente}
//exemplo do express
npm install express@4.16.3

//comando que serve pra informar a dependencia do componente 
//--save-exact 
//exemplo
npm install express@4.16.3 --save-exact

