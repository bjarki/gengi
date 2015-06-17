'use strict';

module.exports = function(gulp) {
  var notifier = require('node-notifier');
  gulp.task('styles', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod;

    return gulp.src(gulp.cfg.styles.src)
      .pipe( gulp.plugin.plumber() )
      .pipe(
        gulp.plugin.sass({
          onError: function(error){
            var filename = error.file.split('src/scss').pop();
            notifier.notify({
              title: 'SASS: ' + filename,
              subtitle: 'Line:' + error.line + '/Char:' + error.column,
              message: error.message
            });
            gulp.plugin.util.beep();
            gutil.log(gutil.colors.red('SASS') + gutil.colors.yellow(' failed on file: ' + filename));
            gutil.log(gutil.colors.yellow('Line: ' + error.line + ' / Character: ' + error.column));
            gutil.log(gutil.colors.yellow('Reason: ' + error.message));
          }
        })
       )
      .pipe(
         gulp.plugin.autoprefixer({
          browsers: ['ie >= 10', '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
          cascade: false
         })
       )
      .pipe( !prod ? gutil.noop() : gulp.plugin.csso() )
      .pipe( gulp.dest(gulp.cfg.env.dir + gulp.cfg.styles.subDir) )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });
};