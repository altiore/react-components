const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  appSrc: path.resolve(process.cwd(), 'src'),
  appTsConfig: path.resolve(process.cwd(), 'tsconfig.json'),
  appTsLint: path.resolve(process.cwd(), 'tslint.json'),
}

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  });
  config.module.rules.push({
    test: /(\.module\.scss|\.m\.scss)$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path]___[name]__[local]__[hash:base64:5]',
          sourceMap: true,
        },
      },
      { loader: require.resolve('resolve-url-loader') },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          data: '@import "variables.scss";',
          includePaths: [
            path.resolve(__dirname, '..', 'src', 'styles'),
          ],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /^((?!\.m).)*\.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          data: '@import "variables.scss";',
          includePaths: [
            path.resolve(__dirname, '..', 'src', 'styles'),
          ],
        },
      },
    ],
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    async: false,
    watch: paths.appSrc,
    tsconfig: paths.appTsConfig,
    tslint: paths.appTsLint,
  }));
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};