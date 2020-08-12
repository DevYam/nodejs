let http = require("http")

http.createServer(function (req, resp){
    resp.write("Hello world")
    console.log("Request came")
    resp.end()
}).listen(8080)
