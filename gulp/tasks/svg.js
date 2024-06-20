import spriteSvg from "gulp-svg-sprite"
import rename from "gulp-rename"

export const svg = () => {
    return app.gulp
        .src(app.path.src.svg)
        .pipe(rename({ dirname: "" }))
        .pipe(app.gulp.dest(app.path.build.svg))
        .pipe(
            spriteSvg({
                mode: {
                    stack: {
                        sprite: "../sprites/icons.svg",
                        example: false,
                    },
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.images))
}
