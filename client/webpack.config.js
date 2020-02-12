const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                      'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
  },

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
}
