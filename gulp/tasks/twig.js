import  twigFile from "gulp-twig";

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
        .pipe(twigFile())
        // .pipe(fileInclude())
            .pipe(app.plugins.replace(/\/src\/assets\//g,'assets/'))

        .pipe(app.gulp.dest(app.path.build.twig))
        .pipe(app.plugins.browserSync.stream())
}
