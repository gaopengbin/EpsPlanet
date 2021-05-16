var gulp = require('gulp');
var flatten = require('gulp-flatten');

/**
 * 拷贝epsgis的主题
 */
gulp.task('copy-epsgis-theme', function (done) {
    //拷贝主题样式
    gulp.src([
        'projects/epsgis/theme/**/*'
    ])
        .pipe(gulp.dest('dist/epsgis/assets/theme'));
    done();


});
/**
 * 拷贝json、图片等
 */
gulp.task('copy-jsonimages', function (done) {
    //拷贝json配置文件、拷贝组件图标
    gulp.src([
        'projects/**/components/**/*.json',
        'projects/**/components/**/images/*.{png,jpg,gif,jpeg,svg,bmp}',
    ])
        .pipe(gulp.dest('dist/epsgis/assets/widgets'));

    done();


});
/**
 * 将dist下除了epsgis目录外的目录全部拷贝到dist/epsgis下
 */
gulp.task('copy-lib-to-epsgis', function (done) {
    gulp.src([
        'dist/!(epsgis)/**/*'
    ]).pipe(gulp.dest('dist/epsgis'));
    done();
});
gulp.task('copy-js-to-epsgis', function (done) {
    gulp.src([
        'projects/**/*.js'
    ]).pipe(gulp.dest('dist'));
    done();
});
/**
 * 拷贝类库中的资源文件到epsgis/assets下
 */
gulp.task('copy-lib.assets-to-epsgis.assets',function(done){
    gulp.src([
        'dist/!(epsgis)/assets/**/*.*'
    ])
    .pipe(flatten())
    .pipe(gulp.dest('dist/epsgis/assets'));
    done();
});
/**
 * 拷贝所有
 */
gulp.task('default', gulp.parallel(['copy-epsgis-theme', 'copy-jsonimages', 'copy-lib-to-epsgis','copy-js-to-epsgis','copy-lib.assets-to-epsgis.assets']));