# gulp-typings
gulp-typings allows you to install typings from typings.json with gulp

## Status
[![Build Status](https://travis-ci.org/pushrocks/gulp-typings.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-typings)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-typings/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-typings)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-typings.svg)](https://david-dm.org/pushrocks/gulp-typings)
[![codecov.io](https://codecov.io/github/pushrocks/gulp-typings/coverage.svg?branch=master)](https://codecov.io/github/pushrocks/gulp-typings?branch=master)

## Usage

```js
var gulp = require("gulp");
var gulpTypings = require("gulp-typings");

gulp.task("installTypings",function(){
    var stream = gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});
```
