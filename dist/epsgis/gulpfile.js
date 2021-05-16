var gulp = require('gulp');
var flatten = require('gulp-flatten');
//rsync拷贝也还有有些问题，把files这些也拷贝到utils下了，可能用法不对吧
//rsync -r schematics/**/files ../../dist/epsgis/schematics/** 
//npm run copy:collection && npm run copy:files-m 替换为npm run gulp
//还是gulp靠谱
/**
 * 拷贝json、模板等
 */
gulp.task('copy-files', function (done) {
    //拷贝json配置文件、拷贝组件图标
    gulp.src([
        'schematics/**/*.json',
        'schematics/**/files/**',
    ])
        .pipe(gulp.dest('../../dist/epsgis/schematics'));

    done();


});
/**
 * 拷贝所有
 */
gulp.task(
    'default', 
    gulp.parallel(
        ['copy-files']
    )
);