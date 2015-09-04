var gulp = require('gulp');
var gutil = require('gulp-util');
var babelify = require('babelify');
var argv = require('yargs').argv;
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var browserify = require('browserify');
var watchify = require('watchify');
var es = require('event-stream');
var buffer = require('vinyl-buffer');
var del = require('del'); // rm -rf
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var glob = require('glob');
var compass = require('gulp-compass');
var assign = require('lodash').assign;
var browserSync = require('browser-sync').create();
var Server = require('karma').Server;
var jscs = require('gulp-jscs');

gulp.task('jscs', function() {

  return gulp.src(['js/**/*.js', 'test/**/*.js'])
  .pipe(jscs({
    esnext: true,
    fix: false
  }));

});

function handleError(err) {
  gutil.log(gutil.colors.red(err.toString()));
  this.emit('end');
}

function trace(log) {
  console.log(log);
}

gulp.task('clean', function(done) {

  del(['./dist/*.js'], function(err, paths) {
    if (err) {
      handleError(err);
      return;
    }

    gutil.log('Deleted files:\n', gutil.colors.green(paths.join('\n')));
    done();
  });

});

gulp.task('agent', function(done) {
  browserify({
    insertGlobals: true,
    entries: './js/rethinkAgent.js',
    debug: true
  }).transform(babelify.configure({compact: false}))
  .bundle()
  .on('error', handleError)
  .pipe(source('rethinkAgent.js'))
  .pipe(gulp.dest('./dist'))
  .on('end', function() {
    gutil.log(gutil.colors.green('Rethink Agent Installer has been processed'));
    done();
  });
});

gulp.task('main-task', function(done) {

  // add custom browserify options here
  var customOpts = {
    entries: ['./js/main.js'],
    debug: true
  };
  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
  b.transform(babelify.configure({
    compact: false
  }));

  gulp.task('main', bundle);
  b.on('update', bundle);
  b.on('log', gutil.log);

  function bundle() {

    return b.bundle()

      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))

      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())

      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'));
  }

  gulp.start(['main']);

});

gulp.task('workers', function(done) {

  glob('./js/hyperties/*.js', function(err, files) {

    if (err) done(err);

    var tasks = files.map(function(filename) {

      // add custom browserify options here
      var customOpts = {
        debug: true
      };

      var opts = assign({}, watchify.args, customOpts);
      var b = watchify(browserify(filename, opts));
      b.transform(babelify.configure({
        compact: false
      }));

      b.on('update', bundle);
      b.on('log', gutil.log);

      function bundle(file) {

        gutil.log('update hyperties\nfile path: ', filename);
        var name = filename.substr(filename.lastIndexOf('/') + 1);

        return b.bundle()

          // log errors if they happen
          .on('error', gutil.log.bind(gutil, 'Browserify Error'))
          .pipe(source(name))

          // optional, remove if you don't need to buffer file contents
          .pipe(buffer())

          // optional, remove if you dont want sourcemaps
          .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file

          // Add transformation tasks to the pipeline here.
          .pipe(sourcemaps.write('./')) // writes .map file
          .pipe(gulp.dest('./dist/hyperties'));

      }

      return bundle(filename);

    });

    es.merge(tasks).on('end', done);

  });

});

gulp.task('rethink', function(done) {

  // add custom browserify options here
  var customOpts = {
    entries: ['./js/rethink.js'],
    debug: true
  };
  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
  b.transform(babelify.configure({
    compact: false
  }));

  gulp.task('main', bundle);
  b.on('update', bundle);
  b.on('log', gutil.log);

  function bundle() {

    return b.bundle()

      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('rethink.js'))

      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())

      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'));
  }

  gulp.start(['main']);

});

gulp.task('installer', function(done) {
  browserify({
    insertGlobals: true,
    entries: './js/rethinkInstaller.js',
    debug: true
  })
  .transform(babelify.configure({compact: false}))
  .bundle()
  .on('error', handleError)
  .pipe(source('rethinkInstaller.js'))
  .pipe(gulp.dest('./dist'))
  .on('end', function() {
    gutil.log(gutil.colors.green('Rethink file has been processed'));
    done();
  });
});

gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    })).on('error', handleError)
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['compass']);
});

gulp.task('watch', function() {
  gulp.watch('./js/rethinkInstaller.js', ['installer']);
  gulp.watch('./js/rethinkAgent.js', ['agent']);
});

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('clean', ['clean']);
gulp.task('dev', ['js', 'sass', 'watch', 'sass:watch']);
gulp.task('js', ['workers', 'main-task', 'installer', 'agent', 'rethink']);
gulp.task('sass', ['compass']);
gulp.task('default', ['dev']);
