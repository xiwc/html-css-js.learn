var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

	var tmpl = (req.url.length > 0) ? req.url.slice(1) : "todos.css";

	fs.exists(tmpl, function(exist){
		if(exist){
			fs.readFile(tmpl, 'utf-8', function(err, content){
				res.write(content);
				res.end();
			});
		}else{
			res.write(404);
			res.end();
		}
	});
}).listen(80);

console.log('Server running...');