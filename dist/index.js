"use strict";
/// <reference path="./typings/index.d.ts" />
const plugins = require("./gulp-typings.plugins");
let forEach = function (file, enc, cb) {
    plugins.typingsCore.install({ production: false, cwd: plugins.path.dirname(file.path) })
        .then(function () {
        cb(null, file);
    }, function () {
        console.error("something went wrong: Check if path is correct: " + file.path);
        cb(null, file);
    });
};
let atEnd = function (cb) {
    cb();
};
module.exports = function (optionsArg) {
    return plugins.through2.obj(forEach, atEnd);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkNBQTZDO0FBQzdDLE1BQVksT0FBTyxXQUFNLHdCQUV6QixDQUFDLENBRmdEO0FBRWpELElBQUksT0FBTyxHQUFHLFVBQVMsSUFBSSxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7U0FDakYsSUFBSSxDQUFDO1FBQ0YsRUFBRSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQUM7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxFQUFFLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsSUFBSSxLQUFLLEdBQUcsVUFBUyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRUYsaUJBQVMsVUFBUyxVQUFXO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDIn0=