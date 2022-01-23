import  svg_sprite from "gulp-svg-sprite";

export const svgSprite= ()=>{
    return app.gulp.src(`${app.path.src.svgIcons}`)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError(
                {
                    title:"HTML",
                    message:"Error: <%=error.message %>"
                }
            )
        ))

        .pipe(
            svg_sprite({
                mode:{
                    stack:{
                        sprite:'../svgIcons/icons.svg',
                        example:true,
                    }
                }
            })
        )

        .pipe(app.gulp.dest(app.path.build.img_src))
        .pipe(app.gulp.dest(app.path.build.img))

        .pipe(app.plugins.browserSync.stream())
}
