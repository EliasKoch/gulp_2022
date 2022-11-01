// основной модуль
import gulp from "gulp";
//импорт путей
import {path} from "./gulp/config/path.js";
//импорт путей
import {plugins} from './gulp/config/plugin.js';


global.app = {
    path: path,
    gulp: gulp,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    plugins: plugins,
}

//импорт задач
import {copy} from './gulp/tasks/copy.js';
import {clean} from './gulp/tasks/clean.js';
import {html} from './gulp/tasks/html.js';
import {twig} from './gulp/tasks/twig.js';
import {server} from './gulp/tasks/server.js';
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {vue} from "./gulp/tasks/vue.js";
import {img} from "./gulp/tasks/img.js";
import {svgSprite} from "./gulp/tasks/svgSprite.js";


function watcher() {
    app.gulp.watch(path.watch.files, copy);
    app.gulp.watch(path.watch.html, html);
    app.gulp.watch(path.watch.twig, twig);
    app.gulp.watch(path.watch.scss, scss);
    app.gulp.watch(path.watch.js, js);
    app.gulp.watch(path.watch.vue, vue);
    app.gulp.watch(path.watch.img, img);
}
export {svgSprite}

const mainTasks = gulp.parallel(copy, html,twig, scss, js, vue, img)

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))
const build  = gulp.series(clean, mainTasks,)

gulp.task('default', dev);
export {dev}
export {build}