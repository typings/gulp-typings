#!/usr/bin/env node

/// <reference path="../ts/typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksT0FBTyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztDQUMzQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGNBQWMsRUFBQztJQUNwQixFQUFFLENBQUMsd0JBQXdCLEVBQUMsVUFBUyxJQUFJO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkIsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIHBsdWdpbnMgPSB7XG4gICAgZ3VscDogcmVxdWlyZShcImd1bHBcIiksXG4gICAgZ3VscEZ1bmN0aW9uOiByZXF1aXJlKFwiZ3VscC1mdW5jdGlvblwiKSxcbiAgICBndWxwVHlwaW5nczogcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIilcbn07XG5cbmRlc2NyaWJlKFwiZ3VscC10eXBpbmdzXCIsZnVuY3Rpb24oKXtcbiAgICBpdChcInNob3VsZCBpbnN0YWxsIHR5cGluZ3NcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgcGx1Z2lucy5ndWxwLnNyYyhcIi4vdGVzdC90eXBpbmdzLmpzb25cIilcbiAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscFR5cGluZ3MoKSlcbiAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEZ1bmN0aW9uKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSxcImF0RW5kXCIpKVxuICAgIH0pXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
