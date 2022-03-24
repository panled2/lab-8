const port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plaintTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Page does not exist");
            }
            res.end(data);
        });
    };

    router.get("/index.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });

    router.get("/book1.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/book2.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/book3.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/books.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/contact.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/survey.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });

    router.post("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        res.end("POSTED");
    });

    http.createServer(router.handle).listen();
    console.log(`The server is listening on port number: ${port}`);