"use strict";
require("typings-test");
var plugins = {
    gulp: require("gulp"),
    gulpFunction: require("gulp-function"),
    gulpTypings: require("../dist/index.js")
};
describe("gulp-typings", function () {
    it("should install typings", function (done) {
        this.timeout(10000);
        plugins.gulp.src("./test/typings.json")
            .pipe(plugins.gulpTypings())
            .pipe(plugins.gulpFunction(function () {
            done();
        }, "atEnd"));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsSUFBSSxPQUFPLEdBQUc7SUFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNyQixZQUFZLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUN0QyxXQUFXLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0NBQzNDLENBQUM7QUFFRixRQUFRLENBQUMsY0FBYyxFQUFDO0lBQ3BCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQyxVQUFTLElBQUk7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDbkIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9