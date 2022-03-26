// CommonJS中的require命令用于加载模块文件，并返回该模块的exports对象。可省略后缀.js
const path = require('path')

module.exports = {
  // 定义打包入口和出口
	entry: './src/index.js',
	output: {
		//node.js的语法
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}