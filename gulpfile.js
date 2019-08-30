1.//导入所需要的模块
let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cssnano = require('gulp-cssnano');
2.//发布任务
    gulp.task('test',()=>{
        console.log('gulp测试成功 ');
    })
    gulp.task('js',()=>{
        gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
    })
    gulp.task('css',()=>{
        gulp.src('./src/Sass/*.css')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
    })
    gulp.task("img",()=>{
        gulp.src("./src/img/*.*")
        .pipe(imagemin())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest("./dist/img"))
    })