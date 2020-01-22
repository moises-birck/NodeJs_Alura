//Foi para  o config/custom-express
//const express = require('express'); 
//const app = express();

const app = require('./src/config/custom-express');

//module.exports = app;


//config/custom-expresss
// app.listen(3000, function(){
	// console.log("server running in port 3000");
// });



//Foi para a pasta app/rotas
/*
app.get('/',function(req, resp){
    resp.send('<html>' +
                '<head>' +
                    '<meta charset="utf-8">' +
                '</head>' +
                '<body>' +
                    '<h1> Index </h1>'+
                '</body>'+
            '</html>'
            );
});

app.get('/rota2',function(req, resp){
    resp.send('<html>' +
                '<head>' +
                    '<meta charset="utf-8">' +
                '</head>' +
                '<body>' +
                    '<h1> rota2 </h1>'+
                '</body>'+
            '</html>'
            );
});

*/


// const http = require('http');

// const server  = http.createServer(function (req, resp) {
//     let html = '';
//     if (req.url == '/') {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Index </h1>
//             </body> 
//         </html>
//     `;
//     } else if (req.url == '/rota2')
//         html = `<html>
// 					<head>
// 						<meta charset="utf-8">
// 					</head>
// 					<body>
// 						<h1> rota2 </h1>
// 					</body> 
// 				</html>`;
//     resp.end(html);
// });
// server.listen(3000);
