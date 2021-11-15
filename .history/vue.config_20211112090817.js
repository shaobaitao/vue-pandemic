
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
}