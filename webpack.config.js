/** @type {import('webpack').Configuration} */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
      "@img": path.resolve(__dirname, "src/assets/img/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/logos/logo_gusgluna.svg",
      mode: "light",
      devMode: "light",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: { hints: false },
};
