const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return {
      ...config,
      devtool: "source-map",
      plugins: [
        ...config.plugins,
        sentryWebpackPlugin({
          authToken: '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',
          org: "infopen",
          project: "javascript-react",
        })
      ],
    };
  }
);
