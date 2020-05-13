var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");

// 監視　※gulp4の書き方です。
gulp.task( "default", function () {
  gulp.watch( "sass/**/*.scss", gulp.series( "sass" ) ); // sassディレクトリ以下の.scssファイルの更新を監視
  gulp.watch( "ejs/**/*.ejs", gulp.series( "ejs" ) ); // ejsディレクトリ以下の.ejsファイルの更新を監視
});

// Sass
gulp.task( "sass", function () {
  return gulp.src( 'sass/*.scss' )
      .pipe( sass().on( 'error', sass.logError ) )
      .pipe( autoprefixer( {
          // ベンダープレフィックスをどこまでつけるか（基本2バージョン前、IEは9以降・・・）
          browsers: [ 'last 2 version', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2' ],
      }))
      .pipe( gulp.dest( './css' ));
});

// EJS
gulp.task( "ejs", function () {
  return gulp.src(["ejs/**/*.ejs", '!' + "ejs/**/_*.ejs"])
      .pipe(ejs({}, {}, { ext: '.html' }))
      .pipe( gulp.dest( "./" ) );
});