// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssをタスクを作成する
gulp.task("default", function() {
  // style.scssファイルを監視
  return gulp.watch("css/style.scss", function() {
    // style.scssの更新があった場合の処理
    return (
        gulp
        .src("css/style.scss")
        // Sassのコンパイルを実行
        .pipe(
            sass({
                outputStyle: "expanded"
            })
            .on("error", sass.logError)
            )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
    );
  });
});