module.exports = {
    publicPath: './',
    //devServer配置说明
    //https://www.cnblogs.com/edwardwzw/p/13261418.html


    // https://interface.sina.cn/news/wap/fymap2020_data.d.json
    devServer: {
        proxy: {
            '/project/fymap': {
                target: 'https://interface.sina.cn',
                ws: true,
                changeOrigin: true,
            },
        }
    },
}