import sharp from "sharp"
import through2 from "through2"
import size from "gulp-size"

export const images = () =>
    app.gulp
        .src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            through2.obj((file, _, cb) => {
                if (!file.isBuffer()) return cb(null, file)
                const format = file.extname.toLowerCase()
                let transform = sharp(file.contents)
                if ([".jpg", ".jpeg"].includes(format)) {
                    transform = transform.jpeg({
                        quality: 80,
                        progressive: true,
                    })
                } else if (format === ".png") {
                    transform = transform.png({
                        quality: 80,
                        compressionLevel: 9,
                    })
                }
                transform.toBuffer((err, data) => {
                    if (err) {
                        console.error("Sharp error:", err)
                        return cb(err)
                    }
                    file.contents = data
                    cb(null, file)
                })
            })
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(size())
        .pipe(app.plugins.browsersync.stream())
