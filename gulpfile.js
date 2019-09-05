//导入所需要的模块
let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    // babel = require("gulp-babel"),
    cssnano = require('gulp-cssnano');

//发布任务
// gulp.task('test', () => {

//     console.log('gulp测试成功 ');
// })
gulp.task('js', () => {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
})
// gulp.task("babel", () => {
//     gulp.src("./src/js/es6/*.js")
//         .pipe(babel({presets:["@babel/env"]}))
//         .pipe(gulp.dest("./dist.js"));
// })
gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
})
gulp.task("img", () => {
    gulp.src("./src/img/*.*")
        .pipe(imagemin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./dist/img"));
})

gulp.task("default", () => {
    gulp.watch("./src/sass/*.scss", ["sass"]);
    gulp.watch("./src/js/*.js", ["js"]);
    gulp.watch("./src/img/*.*", ["img"]);
    
})