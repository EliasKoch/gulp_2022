import  dartSass from "sass";
import sassGlob from "gulp-sass-glob";
import  gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import groupCssMediaQueries from "gulp-group-css-media-queries";



const sass = gulpSass(dartSass);


export const scss= ()=>{
    return app.gulp.src(app.path.src.scss,{sourcemaps:app.isDev})
        .pipe(
            app.plugins.if(
                app.isDev,
                app.plugins.sourcemaps.init({loadMaps: true})
            )
        )

        .pipe(sassGlob())
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError(
                {
                    title:"SCSS",
                    message:"Error: <%=error.message %>"
                }
            )
        ))
        .pipe(app.plugins.replace(/\/src\/assets\/img\//g,'/assets/img/'))
        .pipe(sass({
            "include css": true,
            outputStyle:'expanded',
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid:true,
                    overrideBrowserslist:["last 3 versions"],
                    cascade:true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )


        .pipe(app.plugins.concat(app.path.fileName.css))

        .pipe(
            app.plugins.if(
                app.isDev,
                // .pipe(sourcemaps.write('../maps'))
                app.plugins.sourcemaps.write('.')
            )
        )

        .pipe(app.gulp.dest(app.path.build.css_src))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}