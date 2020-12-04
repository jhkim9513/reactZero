const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                //자동으로 옛날 브라우저 지원
                targets: {
                  //원하는 브라우저에만 맞춰서 적용되게함
                  browsers: ["> 10% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  // plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
