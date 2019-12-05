let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    babel = require('gulp-babel');
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})
gulp.task('es5',()=>{
    gulp.src('./src/js/ES5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('es6',()=>{
    gulp.src('./src/js/ES6/*.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest('./src/js/ES5'));
})
//img-main
gulp.task('main',()=>{
    gulp.src('./src/img/main/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/main'));
})
//img-details
gulp.task('details',()=>{
    gulp.src('./src/img/details/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/details'));
})
//img-list
gulp.task('list',()=>{
    gulp.src('./src/img/list/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/list'));
})
//img-cart
gulp.task('cart',()=>{
    gulp.src('./src/img/cart/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/cart'));
})
//img-login
gulp.task('login',()=>{
    gulp.src('./src/img/login/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/login'));
})
//img-logon
gulp.task('logon',()=>{
    gulp.src('./src/img/logon/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/logon'));
})
gulp.task('default',()=>{
    gulp.watch('./src/js/ES5/*.js',['es5']);
    gulp.watch('./src/js/ES6/*.js',['es6']);
    gulp.watch('./src/sass/*.scss',['sass']);
})