
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  base:'/base/app2',
  publicPath:'/app2/',
  outputPath:'../dist/app2/',
	// mountElementId: 'app1-root',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-app1',
      dll: false,

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
    ['@umijs/plugin-qiankun/slave', {}]
  ],
}
