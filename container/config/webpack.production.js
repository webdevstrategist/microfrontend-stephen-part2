const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json")
const commonConfig = require("./webpack.common");

const domain = process.env.APPLICATION_DOMAIN

const devConfig = {
  mode: "production",
  output:{
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
