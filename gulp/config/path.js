//получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const name ={
    js:'app.js',
    css:'app.css',
    vue:'vueApp.js'
}


export const path = {
    fileName:name,
    build:{
        css:`${buildFolder}/assets/css/`,
        css_src:`${srcFolder}/assets/css/`,

        js:`${buildFolder}/assets/js/`,
        js_src:`${srcFolder}/assets/js/`,

        vue:`${buildFolder}/assets/vue/`,
        vue_src:`${srcFolder}/assets/vue/`,


        img:`${buildFolder}/assets/img/`,
        img_src:`${srcFolder}/assets/img/`,

        fonts:`${buildFolder}/assets/fonts/`,
        fonts_src:`${srcFolder}/assets/fonts/`,

        html:`${buildFolder}/`,
        files:`${buildFolder}/files/`,


    },

    src:{
        img:`${srcFolder}/assets_src/img/**/*.{jpeg,jpg,png,gif,webp}`,
        svg:`${srcFolder}/assets_src/img/**/*.svg`,
        scss:`${srcFolder}/assets_src/styles/style.scss`,
        js:`${srcFolder}/assets_src/js/app.js`,
        vue:`${srcFolder}/assets_src/vue/vueApp.js`,
        html:`${srcFolder}/*.html`,
        files:`${srcFolder}/files/**/*.*`,
        fonts:`${srcFolder}/assets_src/fonts/**/*.*`,
        svgIcons:`${srcFolder}/assets_src/svgIcons/*.svg`
    },
    watch:{
        img:`${srcFolder}/assets_src/img/**/*.*`,
        js:`${srcFolder}/assets_src/js/**/*.js`,
        vue:`${srcFolder}/assets_src/vue/**/*.*`,
        scss:[`${srcFolder}/assets_src/styles/**/*.*`],
        files:`${srcFolder}/files/**/*.*`,
        html:`${srcFolder}/**/*.html`,
        fonts:`${srcFolder}/assets_src/fonts/**/*.*`,
    },
    clean:[`${buildFolder}/assets/css`,`${buildFolder}/assets/js`,`${buildFolder}/assets/vue`,`${buildFolder}/file` ,`${srcFolder}/assets/css`,`${srcFolder}/assets/js`,`${srcFolder}/assets/vue`],
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp:'',
}