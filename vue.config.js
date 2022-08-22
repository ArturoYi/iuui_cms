const { defineConfig } = require('@vue/cli-service')

const path = require("path")

// const CompressionWebpackPlugin = require("compression-webpack-plugin")
// const productionGzipExtensions = ["js", "css"]
const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  // 關閉eslint
  lintOnSave: false,
  // 基本路徑
  publicPath: "./",
  // 輸出文件目錄
  // outputDir: "",
  // 靜態資源目錄
  assetsDir: "static",
  // runtime-compiler包含编译器，可以选用template或render;runtime-only只能編譯render
  runtimeCompiler: true,
  // 靜態文件加入hash以便控制緩存
  filenameHashing: true,
  // 调整内部的 webpack 配置。
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("~assets", resolve("src/assets"))
    // .set("components", resolve("src/components"))
    // .set("types", resolve("src/types"))
    // .set("public", resolve("src/public"))
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // 注意是vue2的忽略自定義標籤警告
          isCustomElement: (tag) => {
            return ["xml", "block", "mutation", "category"].includes(tag)
          }
        }
      }))
  },
  // CSS相關配置
  css: {
    // 是否開啟css source map
    sourceMap: false,
    // css預設
    loaderOptions: {
      scss: {
        //   //這裡寫成函數以後出現重複導入報錯時可快速處理
        additionalData: '@import "@/assets/index.scss";',
      },
      sass: {
        implmentation: require("sass"),// This line must in sass option
      },
      css: {
        modules: {
          auto: () => false,
        },
      },
    },
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 自動1打開瀏覽器
    open: false,
    port: 9696,
    //使用代理
    proxy: {

    }
  },
  // 
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("readable-stream"),
        crypto: require.resolve("crypto-browserify"),
        perf_hooks: false,
        module: false,
        "@blueprintjs/core": false,
        "@blueprintjs/icons": false,
        domain: false,
        fs: false,
        pnpapi: false,
        punycode: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
        // {
        //   test: /\.s[ac]ss$/i,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //       },
        //     },
        //   ],
        // },
      ],
    },
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     filename: "[path][base].gzip",
    //     algorithm: "gzip",
    //     test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
    //     threshold: 10240, //内容超过10KB进行压缩
    //     minRatio: 0.8,
    //   })
    // ],
    externals: [
      {
        "./cptable": "var cptable",
      },
    ],
  }
})
