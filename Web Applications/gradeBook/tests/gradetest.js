var book = require("../lib/gradebook").book;
var express =  require("express");
var app = express();

app.listen(3000);

exports["setUp"]= function(callback){
    book.reset();
    callback();
};

exports["Can get letter grades"] = function(test)
{
    book.addGrade(100);
    book.addGrade(50);

    var result = book.getLetterGrade();
    test.equal(result, "C");
    test.done();
};

exports["Can average grades"] = function(test)
{
    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();

    test.equal(average, 75);
    test.done();
};
exports["Can add new grade"] = function(test)
{
    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count, 1);
    test.done();
}; 

