/// <reference path="./typings/main.d.ts" />
var plugins = {
    gulp: require("gulp"),
    gulpFunction: require("gulp-function"),
    gulpTypings: require("../index.js")
};

describe("gulp-typings",function(){
    it("should install typings",function(done){
        plugins.gulp.src("./test/typings.json")
            .pipe(plugins.gulpTypings())
            .pipe(plugins.gulpFunction(function(){
                done();
            },"atEnd"))
    })
});