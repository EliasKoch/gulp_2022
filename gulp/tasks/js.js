import webpackStream from "webpack-stream"
export const js= ()=>{
    return app.gulp.src(app.path.src.js,{sourcemaps:true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError(
                {
                    title:"JS",
                    message:"Error: <%=error.message %>"
                }
            )
        ))
        .pipe(webpackStream({
            mode:app.isBuild ? 'production':'development',
            output:{
                filename:app.path.fileName.js
            },
            // module: {
            //     rules: [
            //         {
            //             test: /\.js$/,
            //             use: {
            //                 loader: "babel-loader",
            //                 options: {
            //                     presets: ["@babel/preset-env"],
            //                     plugins: ["babel-plugin-root-import", '@babel/plugin-transform-runtime'],
            //                 },
            //             }
            //         },
            //     ],
            // },
        }))
        // .pipe(app.plugins.replace(/\/src\/assets_src\/js\//g,'/assets/js/'))
        // .pipe(app.plugins.concat(app.name_file.js))
        .pipe(app.gulp.dest(app.path.build.js_src))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}