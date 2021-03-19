var http = require("http")
//essa variavel esta recebendo um modulo/objeto tipo http.
http.createServer(function(res,resp){
    //criar html
    resp.writeHead(200,{"Content-Type":"text/plain"})
    resp.write('Olá, Mundo!')
    resp.end();
}).listen(4000)


    