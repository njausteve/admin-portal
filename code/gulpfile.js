/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by Stephen, Piyush & the Pirate
 */
// Declaring gulp variable
var gulp        = require('gulp'),
browserSync     = require('browser-sync'),
reload          = browserSync.reload,
$               = require('gulp-load-plugins')(),
del             = require('del'),
runSequence     = require('run-sequence'),
cleanCSS        = require('gulp-clean-css'),
rev             = require('gulp-rev'),
path            = require('path'),
Server          = require('karma').Server,
uglify          = require('gulp-uglify'),
saveLicense     = require('uglify-save-license');




//Browser-sync tasks: START
////////////////////////////////////////////////////

// Browser-sync
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./src/"
    },
    port: 8989
  });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

// Start webserver
gulp.task('serve', function(done) {
  return browserSync({
    server: {
      baseDir: './src/'
    },
    port: 8989
  }, done);
});

// Start webserver from _build folder
gulp.task('serve-build', function(done) {
  return browserSync({
    server: {
      baseDir: './_build/'
    },
    port: 3000
  }, done);
});

////////////////////////////////////////////////////
//Browser-sync tasks: END//

// Clean build folder
gulp.task('clean:build', function (cb) {
  del([
    './_build/'
    // if we don't want to clean any file we can use negate pattern
    //'!dist/mobile/deploy.json'
    ], cb);
});

// Clean checkmarx folder
gulp.task('clean:checkmarx', function (cb) {
  del([
    './_checkmarx/'
    // if we don't want to clean any file we can use negate pattern
    //'!dist/mobile/deploy.json'
    ], cb);
});




// copy fonts from a module outside of our project (like Bower)
// need to update !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
gulp.task('fonts', function() {
  gulp.src('./src/**/**/**/*.{ttf,woff,eof,eot,svg}')
  .pipe($.rename({dirname: ''}))
  .pipe(gulp.dest('./_build/assets/fonts'));
});





// Optimize images
gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*.*') //only two level subfolders considered * Standard practice
  .pipe($.changed('./_build/src/assets/images/'))
  .pipe($.imagemin({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest('./_build/assets/images/'));
});




// minify HTML
gulp.task('minify-html', function() {
  gulp.src(['./src/**/**/*.html'])
  .pipe($.bytediff.start())
  .pipe($.htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe($.bytediff.stop(bytediffFormatter))
  .pipe(gulp.dest('./_build/'));
});

// minify HTML
gulp.task('minify-index-html', function() {
  gulp.src(['./_build/*.html'])
  .pipe($.bytediff.start())
  .pipe($.htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe($.bytediff.stop(bytediffFormatter))
  .pipe(gulp.dest('./_build/'));
});




// minify CSS
// minifying @src/assets/css only
gulp.task('copy-css', function() {
  gulp.src(['./src/assets/css/**/*.css','!./src/assets/css/bootstrap_custom/**/*.css','!./src/assets/css/grid.css'])
  .pipe($.bytediff.start())
  .pipe($.autoprefixer(['last 2 versions']))
  .pipe(cleanCSS())
  .pipe($.bytediff.stop(bytediffFormatter))
  .pipe(gulp.dest('./_build/assets/css/'));
});




// ngAnnotate and minify JS
gulp.task('minify-js', function() {
  gulp.src(['./src/app/**/*.js', '!./src/app/**/*.spec.js', '!./src/app/*.js'])
  .pipe($.ngAnnotate({
    add: true,
    single_quotes: true
  }))
  .pipe($.bytediff.start())
  .pipe(uglify({
      output: {
          comments: saveLicense
      }
  }))
  .pipe($.bytediff.stop(bytediffFormatter))
  .pipe(gulp.dest('_build/app'));
});





/*
*SASS task, will run when any SCSS files change &
*BrowserSync will auto-update browsers
*/
gulp.task('sass', function() {
  return gulp.src('./src/assets/css/sass/*.scss')
  .pipe($.sourcemaps.init())
  .pipe($.sass({
    style: 'expanded'
  }))
  .on('error', $.notify.onError({
    title: 'SASS Failed',
    message: 'Error(s) occurred during compile!'
  }))
  .pipe($.autoprefixer(['last 2 versions']))
  .pipe(gulp.dest('./src/assets/css/sass/'))
  .pipe(reload({
    stream: true
  }))
  .pipe($.notify({
    message: 'Styles task complete'
  }));
});





// index.html build
// script/css concatenation n versioning
//
// Change log- Autoprefixer removed : creating problem in iPad/safari browser
gulp.task('usemin', function() {
  return gulp.src('./src/index.html')
    // add templates path
    .pipe($.htmlReplace({
      'templates': '<script type="text/javascript" src="js/templates.js"></script>'
    }))
    .pipe($.usemin({
      css: [cleanCSS(), rev()],
      angularlibs: [rev()],
      appcomponents: [$.ngAnnotate({add: true,single_quotes: true}), uglify({output: { comments: saveLicense}}), rev()]
    }))
    .pipe(gulp.dest('./_build/'));
  });




// calculate build folder size
gulp.task('build:size', function() {
  var s = $.size();

  return gulp.src('./_build/**/*.*')
  .pipe(s)
  .pipe($.notify({
    onLast: true,
    message: function() {
      return 'Total build size ' + s.prettySize;
    }
  }));
});




// Copy All Files At The Root Level (app)
gulp.task('copy', function() {
  return gulp.src([
    './src/*',
    '!./src/*.html',
    '!./src/*js'
  ], {
    dot: true
  }).pipe(gulp.dest('./_build'));
});


// Copy All Files for Chekmarx report
gulp.task('copy:checkmarx', function() {
  return gulp.src([
    './_build/**/*.*',
    '!./_build/**/*.spec.js'
  ], {
    dot: true
  })
  .pipe($.rename({dirname: ''}))
  .pipe(gulp.dest('./_checkmarx'));
});



// SW-precache Swervice worker generator
gulp.task('sw', function(callback) {
  var swPrecache = require('sw-precache');
  var rootDir = './_build';

  swPrecache.write(path.join(rootDir, '/sw.js'), {
    staticFileGlobs: [rootDir + '/**/**/*.*'],
    stripPrefix: rootDir
  }, callback);

});

// minify SW
gulp.task('minify-js-sw', function() {
  gulp.src(['./_build/sw.js'])
  .pipe($.bytediff.start())
  .pipe(uglify())
  .pipe($.bytediff.stop(bytediffFormatter))
  .pipe(gulp.dest('./_build/'));
});



//SUPPORTING FUNCTIONS
/////////////////////////////////////////////////////////

 function bytediffFormatter(data) {
  var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
  return data.fileName + ' went from ' +
  (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
  ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

 function formatPercent(num, precision) {
  return (num * 100).toFixed(precision);
}






// Default task to be run with `gulp` command
// this default task will run BrowserSync & then use Gulp to watch files.
// when a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync', 'sass'], function() {
  gulp.watch('./src/assets/css/*.min.css', function(file) {
    if (file.type === "changed") {
      reload(file.path);
    }
  });
  gulp.watch(['./src/*.html', './src/app/**/**/*.html'], ['bs-reload']);
  gulp.watch(['./src/app/*.js','./src/**/**/**/*.js'], ['bs-reload']);
  gulp.watch(['./src/assets/css/*.css','./src/assets/css/**/*.css'], ['bs-reload']);
  gulp.watch(['./src/assets/css/**/*.scss'], ['sass']);
});




/**
 * build task:
 * 1. clean /_build folder
 * 2. compile SASS files, minify and uncss compiled css
 * 3. copy and minimize images
 * 4. minify and copy all HTML files into $templateCache
 * 5. build index.html
 * 6. minify and copy all JS files
 * 7. copy fonts
 * 8. show build folder size
 * 9. copy files from root folders like favicon
 * 10. Generate Service Worker at build folder
 */
 gulp.task('build', function(callback) {
  runSequence(
    'clean:build',
    'clean:checkmarx',
    'sass',
    'minify-html',
    'copy-css',
    'minify-js',
    'images',
    'usemin',
    'minify-index-html',
    'fonts',
    'build:size',
    'copy',
    'sw',
    'minify-js-sw',
    'copy:checkmarx',
    callback);
});



//Testing with Karma and Jasmine
///////////////////////////////////////////////

//Single sun Karma test

gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

//Continuous run Karma test

gulp.task('test-auto', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});



// Protactor test
///////////////////////////////////////////////////////////////////////////////////////


// Protractor Gulp task
gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve', 'webdriver-update'], runProtractor);


// Supporting functions
//////////////////////////////

// Downloads and Update the selenium webdriver

gulp.task('webdriver-update', $.protractor.webdriver_update_specific({
  browsers: ['ignore_ssl','proxy=http://proxy.tcs.com:8080']
}));

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

// Run Protractor

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(path.join('e2e/**/*.js'))
    .pipe($.protractor.protractor({
      configFile: 'protractor.config.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}
