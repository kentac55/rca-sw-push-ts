/* eslint-disable */
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
const workboxPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  webpack: function(config, env) {
    const isEnvProduction = env === 'production'
    if (isEnvProduction) {
      const workboxConfigProd = {
        swSrc: './resources/sw.js',
        swDest: 'sw.js',
        exclude: [/\.map$/, /asset-manifest\.json$/],
      }
      config = removeSWPrecachePlugin(config)
      config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd))
    }
    return config
  },
}

function removeSWPrecachePlugin(config) {
  const swPrecachePluginIndex = config.plugins.findIndex(element => {
    return element.constructor.name === 'GenerateSW'
  })
  if (swPrecachePluginIndex !== -1) {
    config.plugins.splice(swPrecachePluginIndex, 1)
  }
  return config
}
