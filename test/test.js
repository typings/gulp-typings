/// <reference path="./typings/index.d.ts" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLElBQUksT0FBTyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztDQUMzQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGNBQWMsRUFBQztJQUNwQixFQUFFLENBQUMsd0JBQXdCLEVBQUMsVUFBUyxJQUFJO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7YUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN2QixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ25CLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==