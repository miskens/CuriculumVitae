module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/'},
            },
        },
    // },
    // azure: {
    //     proxy: {
    //         '^/azapi': {
    //             target: 'https://csb1003bffd9e4e9a13.blob.core.windows.net/azapi',
    //             changeOrigin: true,
    //             logLevel: 'debug',
    //             pathRewrite: { '^/azapi': '/'},
    //         },
    //     }
    }
}