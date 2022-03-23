const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");
const app= http.createServer();

app.on("request", (req, res) =>{
    var body = [];
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request body is: ${body}`);
    });
    if (routeResponseMap[req.url]) {
        res.end(routeResponseMap[req.url]);
    } else {
        res.end("<h1> Welcom </h1>")
    }
});

app.listen(port);
console.log (`The server is listening on port: ${port}`);