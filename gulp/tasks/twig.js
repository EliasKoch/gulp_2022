import  twigFile from "gulp-twig";
import  data from "gulp-data";
import fs from "fs";

export const twig= ()=>{
    return app.gulp.src(app.path.src.twig)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError(
                {
                    title:"TWIG",
                    message:"Error: <%=error.message %>"
                }
            )
        ))
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync(app.path.optionFile));
        }))
        .pipe(twigFile())
        // .pipe(fileInclude())
            .pipe(app.plugins.replace(/\/src\/assets\//g,'assets/'))

        .pipe(app.gulp.dest(app.path.build.twig))
        .pipe(app.plugins.browserSync.stream())
}
