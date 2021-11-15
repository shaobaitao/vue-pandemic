let path = require("path")
module.exports = {
    publicPath: './',
    //devServer配置说明
    //https://www.cnblogs.com/edwardwzw/p/13261418.html
    devServer: {
        proxy: {
            '/user': {
                // target: 'http://192.168.2.103:5000',
                target: 'http://127.0.0.1:5000',
                ws: true,
                changeOrigin: true,
            },
            '/questionnaire':{
                target: 'http://127.0.0.1:5000',
                ws: true,
                changeOrigin: true,
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                // lessOptions: {
                modifyVars: {
                    // 直接覆盖变量
                    // 'text-color': '#111',
                    // 'border-color': '#eee',
                    // 'nav-bar-text-color': '#111',
                    // 'nav-bar-icon-color': '#111',
                    // 'tabs-nav-background-color': '#f7f8fa'
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    // hack: `true; @import "./src/style/vant.less";`,
                    hack: `true; @import "${path.join(
                        __dirname,
                        './src/style/vant.less'
                    )}";`
                },
            },
        },
    },
}