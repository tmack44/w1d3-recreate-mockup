var gulp = require ('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init ( {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['browserSync'], function(){
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
