import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const isDevelopment = process.env.NODE_ENV !== "production";

const webpackConfig = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.ts",
  devServer: {
    hot: true,
  },
  output: {
    path: resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src", "index.html"),
    }),
  ],
};

export default webpackConfig;
