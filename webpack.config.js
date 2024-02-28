module.exports = {
  entry: {
    home: "./src/pages/home/index.js",
    "app/app": "./src/pages/app/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js"],
  },
};
