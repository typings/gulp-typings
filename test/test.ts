import "typings-test";
var plugins = {
    gulp: require("gulp"),
    gulpFunction: require("gulp-function"),
    gulpTypings: require("../dist/index.js")
};

describe("gulp-typings",function(){
    it("should install typings",function(done){
        this.timeout(10000);
        plugins.gulp.src("./test/typings.json")
            .pipe(plugins.gulpTypings())
            .pipe(plugins.gulpFunction(function(){
                done();
            },"atEnd"))
    })
});