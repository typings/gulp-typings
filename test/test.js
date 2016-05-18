/// <reference path="./typings/index.d.ts" />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLElBQUksT0FBTyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztDQUMzQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGNBQWMsRUFBQztJQUNwQixFQUFFLENBQUMsd0JBQXdCLEVBQUMsVUFBUyxJQUFJO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG52YXIgcGx1Z2lucyA9IHtcclxuICAgIGd1bHA6IHJlcXVpcmUoXCJndWxwXCIpLFxyXG4gICAgZ3VscEZ1bmN0aW9uOiByZXF1aXJlKFwiZ3VscC1mdW5jdGlvblwiKSxcclxuICAgIGd1bHBUeXBpbmdzOiByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKVxyXG59O1xyXG5cclxuZGVzY3JpYmUoXCJndWxwLXR5cGluZ3NcIixmdW5jdGlvbigpe1xyXG4gICAgaXQoXCJzaG91bGQgaW5zdGFsbCB0eXBpbmdzXCIsZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgcGx1Z2lucy5ndWxwLnNyYyhcIi4vdGVzdC90eXBpbmdzLmpzb25cIilcclxuICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwVHlwaW5ncygpKVxyXG4gICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHBGdW5jdGlvbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9LFwiYXRFbmRcIikpXHJcbiAgICB9KVxyXG59KTsiXX0=
