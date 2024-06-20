import sass from "gulp-dart-sass"
import sassGlob from "gulp-sass-glob"
import rename from "gulp-rename"
import cleanCss from "gulp-clean-css"
import autoprefixer from "gulp-autoprefixer"
import sourcemaps from "gulp-sourcemaps"

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(
            sass({
                outputStyle: "expanded",
            }).on("error", sass.logError)
        )
        .pipe(
            autoprefixer({
                grid: true,
                overrideBrowserslist: ["last 3 versions"],
                cascade: true,
            })
        )
        .pipe(cleanCss())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}
