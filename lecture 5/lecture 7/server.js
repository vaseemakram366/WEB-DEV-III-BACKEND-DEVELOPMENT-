const http = require("http");

const users = [
    { id: 1, name: "vaseem", email: "vaseem@23gmail.com" },
    { id: 2, name: "ravi", email: "ravim@23gmail.com" },
    { id: 3, name: "rohit", email: "vaseem@23gmail.com" },
    { id: 4, name: "akshay", email: "vaseem@23gmail.com" }


]

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Welcome to home page</h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text?html" });
        res.write("<h1>Welcome to about page</h1>");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to contact page</h1>");
        res.end();

    } else if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, { "content-Type": "application/login" });
        res.write(JSON.stringify(users));
        res.end();
    }
    else{
        res.writeHead(404, {"content-Type": "text/html"});
        res.write("<h1>404 page not found</h1>")
        res.end();
    }




    res.end("hello from http")

})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

