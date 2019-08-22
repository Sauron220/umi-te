import pxtorem from 'postcss-pxtorem';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash',
  publicPath: './',
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['*', '!font-size', '!border-radius'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    })
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'myapp',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  targets: {
    chrome: 49,
    ie: 11,
    safari: 10,
    ios: 8
  },
  browserslist: [
    "> 1%",
    'iOS > 7',
    'Android > 4',
    'last 2 versions'
  ]
}
