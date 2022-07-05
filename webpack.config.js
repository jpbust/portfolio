const path = require("path");

const SRC_DIR = path.join(__dirname, "client", "src");
const OUT_DIR = path.join(__dirname, "public");

module.exports = {
  entry: path.join(SRC_DIR, "index.js"),
  output: {
    path: OUT_DIR,
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
