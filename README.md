# gulp-typings
gulp-typings allows you to install typings rom typings.json with gulp

## Status 
[![Build Status](https://travis-ci.org/pushrocks/gulp-typings.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-typings)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-typings/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-typings)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-typings.svg)](https://david-dm.org/pushrocks/gulp-typings)
[![Coverage Status](https://coveralls.io/repos/github/pushrocks/gulp-typings/badge.svg?branch=master)](https://coveralls.io/github/pushrocks/gulp-typings?branch=master)

## Usage

```js
var gulp = require("gulp");
var gulpTypings = require("gulp-typings");

gulp.task("installTypings",function(){
    gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
});
```
