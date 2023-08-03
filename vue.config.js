module.exports = {

  transpileDependencies: true,
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'network': '@/network',
				'components': '@/components',
				'views': '@/views',
			}
		},
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // 将 JS 字符串生成为 style 节点
            // 'style-loader',
            // 将 CSS 转化成 CommonJS 模块
            // 'css-loader',
            // 将 Sass 编译成 CSS
            'sass-loader',
          ],
        },
     /*   {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            // 'style-loader',
            // 'css-loader',
            'less-loader',
          ],
        }, */

      ]
    },
	},


}
