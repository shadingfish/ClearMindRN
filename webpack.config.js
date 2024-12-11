// const path = require('path');

// module.exports = {
//   entry: './src/index.mjs', // 入口文件支持 .mjs
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'), // 输出目录
//   },
//   resolve: {
//     extensions: ['.mjs', '.js', '.jsx'], // 支持解析 .mjs 后缀
//   },
//   module: {
//     rules: [
//       {
//         test: /\.mjs$/, // 针对 .mjs 文件的处理规则
//         include: /node_modules/, // 如果有需要，可以包括 node_modules 的 mjs 文件
//         type: 'javascript/auto', // 告诉 Webpack 这是 ES Module 格式
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/, // 排除 node_modules
//         use: {
//           loader: 'babel-loader', // 使用 Babel 转换 JavaScript 代码
//         },
//       },
//     ],
//   },
//   mode: 'development', // 开发模式
// };
