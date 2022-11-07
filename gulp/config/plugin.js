import  replace from "gulp-replace";
import  notify from "gulp-notify";//уведомления
import  plumber from "gulp-plumber";//обработка ошибок
import  browserSync from "browser-sync"
import  concat from "gulp-concat"
import  newer from "gulp-newer"
import  ifPlugin from "gulp-if"
import sourcemaps from "gulp-sourcemaps"
export  const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    concat:concat,
    newer:newer,
    if:ifPlugin,
    sourcemaps:sourcemaps,
}