/// <reference path="./typings/main.d.ts" />
var plugins = {
    gulp: require("gulp"),
    gulpFunction: require("gulp-function"),
    gulpTypings: require("../dist/index.js")
};
describe("gulp-typings", function () {
    it("should install typings", function (done) {
        plugins.gulp.src("./test/typings.json")
            .pipe(plugins.gulpTypings())
            .pipe(plugins.gulpFunction(function () {
            done();
        }, "atEnd"));
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDLElBQUksT0FBTyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztDQUMzQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGNBQWMsRUFBQztJQUNwQixFQUFFLENBQUMsd0JBQXdCLEVBQUMsVUFBUyxJQUFJO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgcGx1Z2lucyA9IHtcbiAgICBndWxwOiByZXF1aXJlKFwiZ3VscFwiKSxcbiAgICBndWxwRnVuY3Rpb246IHJlcXVpcmUoXCJndWxwLWZ1bmN0aW9uXCIpLFxuICAgIGd1bHBUeXBpbmdzOiByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKVxufTtcblxuZGVzY3JpYmUoXCJndWxwLXR5cGluZ3NcIixmdW5jdGlvbigpe1xuICAgIGl0KFwic2hvdWxkIGluc3RhbGwgdHlwaW5nc1wiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICBwbHVnaW5zLmd1bHAuc3JjKFwiLi90ZXN0L3R5cGluZ3MuanNvblwiKVxuICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwVHlwaW5ncygpKVxuICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwRnVuY3Rpb24oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9LFwiYXRFbmRcIikpXG4gICAgfSlcbn0pOyJdfQ==
