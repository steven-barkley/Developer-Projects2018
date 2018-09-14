var book = require("../lib/gradebook").book;
var express =  require("express");
var app = express();

app.get("/", function(req, res)
{
    res.send("Hell0, World!");
});
app.listen(3000);

console.log ("Run server run!!!.....");