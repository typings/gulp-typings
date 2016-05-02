/// <reference path="./typings/main.d.ts" />
let plugins = {
    beautylog: require("beautylog"),
    path: require("path"),
    through2: require("through2"),
    typingsCore: require("typings-core")
};

let forEach = function(file,enc,cb){
    plugins.typingsCore.install({production: false, cwd: plugins.path.dirname(file.path)})
        .then(function(){
            cb(null,file);
        },function(){
            plugins.beautylog.error("something went wrong: Check if path is correct: " + file.path.blue);
            cb(null,file);
        });
};

let atEnd = function(cb){
    cb();
};

export = function(optionsArg?) {
    return plugins.through2.obj(forEach,atEnd);
};
