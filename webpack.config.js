const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("autoprefixer"),
  require("postcss-nested"),
  require("postcss-simple-vars"),
  require("postcss-mixins"),
];

module.exports = {
  mode: "development",
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    watchFiles: "./app/**/*.html",
    static: {
      directory: path.join(__dirname, "app"),
    },
    // liveReload: false,
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};
