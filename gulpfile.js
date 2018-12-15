// Gulp
var gulp = require('gulp');

//Gulp plugins
var pug = require('gulp-pug');
var changed = require('gulp-changed');
var less = require('gulp-less');
var eslint = require("gulp-eslint");
var babel = require("gulp-babel");
var imagemin = require("gulp-imagemin");

//plugins of plugins
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ["last 2 versions", "> 5%", "not ie < 8"] });

//just a test
gulp.task('default', function(){
  return console.log("OK");
});

//pug to html conversion
gulp.task('pug', function(){
  return gulp.src("app/pages/*.pug")
  .pipe(changed("dist/")) //pipe files only if changed 
  .pipe(pug({pretty:true})) //pug to html
  .pipe(gulp.dest('dist/'));
});

//less to css conversion
gulp.task('less', function(){
  return gulp.src("app/styles/*.less")
  .pipe(changed("dist/css")) //pipe files only if changed 
  .pipe(less({
    plugins: [autoprefix]
  })) //less to css
  .pipe(gulp.dest('dist/css'));
});

//optimise js
gulp.task('js',function(){
  return gulp.src("app/script/*.js")
  .pipe(changed("dist/js"))//pipe files only if changed 
  .pipe(eslint({
    configFile: '.eslintrc'
  }))//eslint: check if js has any errors
  .pipe(babel({
    presets: ['@babel/env']
  })) //babel: change js to traditional js syntax
  .pipe(gulp.dest("dist/js"));  
});

//minify image
gulp.task('imagemin',function(){
  return gulp.src("app/images/*")
  .pipe(changed("dist/images"))//pipe files only if changed 
  .pipe(imagemin())
  .pipe(gulp.dest("dist/images"));
});

//a combination of all tasks
//gulp.task('build',function(){}