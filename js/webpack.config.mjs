import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isDevelopment = process.env.NODE_ENV !== "production";

const webpackConfig = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.js",
  devServer: {
    hot: true,
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src", "index.html"),
    }),
  ],
};

export default webpackConfig;
