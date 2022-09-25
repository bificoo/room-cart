const path = require("path")
const json5 = require("json5")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = (env, argv) => {
  const devMode = argv.mode === "development"
  return {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "static/js/[name].[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            devMode ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
            { loader: "css-modules-typescript-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            { loader: "sass-loader" },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.json5$/i,
          type: "json",
          parser: {
            parse: json5.parse,
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
      modules: ["src", "node_modules"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "AsiaYo",
        template: path.resolve(__dirname, "./public/index.html"),
      }),
      ...(devMode
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: "static/css/[name].[contenthash].css",
            }),
          ]),
      new CleanWebpackPlugin(),
    ],
    devtool: devMode ? "inline-source-map" : false,
    devServer: {
      static: path.resolve(__dirname, "./dist"),
      compress: true,
      port: 8080,
      open: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
          },
          common: {
            name: "common",
            chunks: "initial",
            minChunks: 2,
          },
        },
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  }
}
