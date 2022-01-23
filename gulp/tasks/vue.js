import webpackStream from "webpack-stream"
import { VueLoaderPlugin } from "vue-loader"
export const vue = () => {
    return app.gulp.src(app.path.src.vue, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError(
                {
                    title: "VUE",
                    message: "Error: <%=error.message %>"
                }
            )
        ))
        .pipe(webpackStream({
            mode: 'development',
            output:{
                filename:app.path.fileName.vue
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                    },
                    // {
                    //     test: /\.js$/,
                    //     use: {
                    //         loader: "babel-loader",
                    //         options: {
                    //             presets: ["@babel/preset-env"],
                    //             plugins: ["babel-plugin-root-import", ],//'@babel/plugin-transform-runtime'
                    //         },
                    //     }
                    // },
                    {
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ],
            },
            plugins:[
                new VueLoaderPlugin()
            ]
        }))
        // .pipe(app.plugins.replace(/\/src\/assets_src\/js\//g,'/assets/js/'))
        // .pipe(app.plugins.concat(app.name_file.js))
        .pipe(app.gulp.dest(app.path.build.vue_src))
        .pipe(app.gulp.dest(app.path.build.vue))
        .pipe(app.plugins.browserSync.stream())
}