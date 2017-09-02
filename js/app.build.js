({
	appDir: './dev',// 打包文件夹
	baseUrl: './',  // 入口路径
	dir: './build', // 输出
	mainConfigFile: './dev/requirejs/require.config.js',    // 配置文件
    inlineText : true,      // text获取的html内容是否写入压缩合并文件
    //
	buildCSS: true,     // 是否打包合并css文件
    //name : 'app'
    // 需要打包的模块
	modules: [
        {
            name: 'app',
            exclude: ['requirejs/normalize'],
        }
	]
})

