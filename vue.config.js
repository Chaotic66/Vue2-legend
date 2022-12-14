const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'.',
  devServer:{
    proxy:{
      '/api':{
        target:process.env.VUE_APP_BASE_URL,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
});
