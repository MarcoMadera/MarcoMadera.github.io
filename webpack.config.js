const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TersetJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const workboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    publicPath: "https://marcomadera.github.io/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  optimization: {
    minimizer: [new TersetJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.jpg|png|jpeg|gif|woff|eot|ttf|svg|mp4|webm|webp$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
      {
        test: /\.md$/i,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new WebpackPwaManifestPlugin({
      name: "Marco Madera GitHub Pages",
      short_name: "Marco Madera",
      description: "My github pages repository created in react",
      orientation: "portrait",
      display: "standalone",
      start_url: "https://marcomadera.github.io/",
      scope: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        {
          src: path.resolve(__dirname, "src/images/logo512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("images"),
          ios: true,
        },
      ],
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: "/search",
          crawlDelay: 2,
        },
        {
          userAgent: "OtherBot",
          allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
          disallow: ["/admin", "/login"],
          crawlDelay: 2,
        },
        {
          userAgent: "*",
          allow: "/",
          disallow: "/search",
          crawlDelay: 10,
          cleanParam: "ref /articles/",
        },
      ],
      sitemap: "https://marcomadera.github.io/sitemap.xml",
      host: "https://github.io",
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "dist/js/*.dll.js"),
      outputPath: "js",
      publicPath: "https://marcomadera.github.io/js",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.*"],
    }),
    new workboxPlugin.GenerateSW({
      swDest: "serviceWorker-9659c3e6.js",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /images/,
          handler: "StaleWhileRevalidate",
        },
        {
          urlPattern: /assets/,
          handler: "CacheFirst",
        },
        {
          urlPattern: new RegExp("https://res.cloudinary.com/"),
          handler: "StaleWhileRevalidate",
        },
        {
          urlPattern: /.*/,
          handler: "NetworkFirst",
        },
      ],
    }),
  ],
};
