const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TersetJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

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
        test: /\.jpg|png|jpeg|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[hash].[ext]",
            outputPath: "assets",
          },
        },
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
    new AppManifestWebpackPlugin({
      logo: "./src/images/logo512.png",
      prefix: "./images/", // default '/'
      output: "./images/", // default '/'. Can be absolute or relative
      emitStats: true,
      statsFilename: "iconstats.json", // can be absolute path
      statsEncodeHtml: false,
      persistentCache: true,
      inject: true,
      config: {
        appName: "Marco Madera GitHub Pages", // Your application's name. `string`
        appDescription: "My github pages repository created in react", // Your application's description. `string`
        developerName: "Marco Madera", // Your (or your developer's) name. `string`
        developerURL: "https://marcomadera.github.io/", // Your (or your developer's) URL. `string`
        background: "#fff", // Background colour for flattened icons. `string`
        theme_color: "#fff", // Theme color for browser chrome. `string`
        display: "standalone", // Android display: "browser" or "standalone". `string`
        orientation: "portrait", // Android orientation: "portrait" or "landscape". `string`
        start_url: "/", // Android start application's URL. `string`
        version: "1.0", // Your application's version number. `number`
        logging: true, // Print logs to console? `boolean`
        icons: {
          android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
          appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
          appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
          coast: { offset: 25 }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
          favicons: true, // Create regular favicons. `boolean`
          firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background }`
          windows: true, // Create Windows 8 tile icons. `boolean` or `{ background }`
          yandex: true, // Create Yandex browser icon. `boolean` or `{ background }`
        },
      },
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
  ],
};
