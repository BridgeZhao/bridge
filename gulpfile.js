
//重命名
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify");
 
gulp.task('rename', function () {
    gulp.src('js/*.js')
    .pipe(uglify())  //压缩
    .pipe(rename('1.min.js')) //会将jquery.js重命名为jquery.min.js
    .pipe(gulp.dest('dist/js'));
    //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
});
//js 压缩
var gulp = require('gulp'),
    uglify = require("gulp-uglify");
 
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});
// css 压缩
var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css");
 
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));
});
// html 压缩
var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html");
 
gulp.task('minify-html', function () {
    gulp.src('*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dist/'));
});
// 文件合并
var gulp = require('gulp'),
    concat = require("gulp-concat");
 
gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});
// less sass的编译
var gulp = require('gulp'),
    less = require("gulp-less");
 
gulp.task('compile-less', function () {
    gulp.src('css/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});
//images mini
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('mini_images', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', function () {

	gulp.start('mini_images','minify-css','minify-html');

});