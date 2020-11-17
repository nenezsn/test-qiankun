
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  base:'/base',
  publicPath:'/base/',
  outputPath:'../dist/base/',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/app1' },
        { path: '/app2' }
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
    ['@umijs/plugin-qiankun',{
      master:{
        apps:[
          {
            name:'app1',
            // entry:'/app1',
            entry:'http://localhost:8001/app1',
            base:'/base/app1',
            path:'/base/app1',
						key: 'app1',
            mountElementId: 'child-app',
          },
          {
            name:'app2',
            // entry:'/app2',
            entry:'http://localhost:8002/app2',
            base:'/base/app2',
            path:'/base/app2',
						key: 'app2',
            mountElementId: 'child-app',
          }
        ],
        jsSandbox: true,
        prefetch: true
      }
    }]
  ],
}
