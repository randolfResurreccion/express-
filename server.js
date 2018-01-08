
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function server1(PORT1){
function handleRequest(request, res) {
    res.end("Word" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
    console.log("http://localhost:" + PORT1);
});
};

function server2(PORT2){
    function handleRequest(request, res) {
        res.end("Bad" + request.url);
    }
    
    var server = http.createServer(handleRequest);
    
    server.listen(PORT2, function() {
        console.log("http://localhost:" + PORT2);
    });
    };

server1(PORT1);
server2(PORT2);