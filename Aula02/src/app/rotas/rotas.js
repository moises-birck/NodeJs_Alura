module.exports = (app) => {
	app.get('/',function(req, resp){
		console.log('home');
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
						'<h1> rota2 aaa </h1>'+
					'</body>'+
				'</html>'
				);
	});
} 