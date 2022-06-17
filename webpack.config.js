const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: "./src/main.js", // 入口
  output: {
    path: path.join(__dirname, "dist"), // 出口路径
    filename: "bundle.js", // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 30000, // 端口号
    open: true,
  },
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif|jpeg)$/i,
        // type: "asset/resource",
        // type: "asset/inline",
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 21 * 1024,
          },
        },
        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2 * 1024,
              // 配置输出的文件名
              name: "[name].[ext]",
              // 配置输出的文件目录
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
};
