
var http = require("http");

var PORT = 7500;

function handleRequest(request, res) {
    res.end("Yo" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("http://localhost:"+PORT)
});
    