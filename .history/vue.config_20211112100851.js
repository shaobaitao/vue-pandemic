module.exports = {
    publicPath: './',
    //devServer配置说明
    //https://www.cnblogs.com/edwardwzw/p/13261418.html


    // https://interface.sina.cn/news/wap/fymap2020_data.d.json
    // https://news.sina.com.cn/project/fymap/ncp2020_full_data.json
    devServer: {
        proxy: {
            '/news/wap': {
                target: 'https://interface.sina.cn',
                ws: true,
                changeOrigin: true,
            },

            'project/fymap': {
                target: 'https://news.sina.com.cn',
                ws: true,
                changeOrigin: true,
            },
        }
    },
}