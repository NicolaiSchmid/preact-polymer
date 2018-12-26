import CopyWebpackPlugin from 'copy-webpack-plugin';
import { generateSw } from 'preact-cli-workbox-plugin';
import projectVersion from 'project-version';
import path from 'path';

function template(config, env, helpers) {
  const htmlPlugin = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0].plugin.options;
  htmlPlugin.inject = false;
  htmlPlugin.xhtml = true;
}

function graphql(config) {
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });
}

function webcomponentsJs(config) {
  // This plugin will copy the necessary WebcomponentsJS files to the build directory
  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs'),
        to: 'webcomponentsjs',
      },
    ]),
  );
}

function staticFiles(config) {
  // This plugin will copy the necessary WebcomponentsJS files to the build directory
  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/robots.txt'),
        to: 'robots.txt',
      },
    ]),
  );
}

function sw(config, env, helpers) {
  generateSw(config, helpers, {
    importWorkboxFrom: 'local',
    skipWaiting: true,
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /webcomponentsjs/i,
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 10,
          cacheName: 'webcomponents-polyfill-cache',
        },
      },
    ],
  });
}

function definitions(config, env, helpers) {
  const definePlugin = helpers.getPluginsByName(config, 'DefinePlugin')[0].plugin;

  definePlugin.definitions = {
    ...definePlugin.definitions,
    VERSION: JSON.stringify(projectVersion),
    GOOGLE_ANALYTICS_CODE: JSON.stringify(''),
  };
}

export default function(...args) {
  template(...args);
  definitions(...args);
  graphql(...args);
  sw(...args);
  webcomponentsJs(...args);
  staticFiles(...args);
}
