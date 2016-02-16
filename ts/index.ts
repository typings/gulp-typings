/// <reference path="./typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog"),
    path: require("path"),
    through2: require("through2"),
    typings: require("typings")
};

var forEach = function(file,enc,cb){
    plugins.typings.install({production: false, cwd: plugins.path.parse(file.path).dir})
        .then(function(){
            cb(null,file);
        },function(){
            plugins.beautylog.error("something went wrong: Check if path is correct: " + file.path.blue);
            cb(null,file);
        });
};

var atEnd = function(cb){
    cb();
};

module.exports = function() {
    return plugins.through2.obj(forEach,atEnd);
};