## umi-plugin-qiankun 配置

安装qiankun插件
```
cnpm i @umijs/plugin-qiankun
```

#### 子应用配置
.umirc.js

```
  {
        base:'/base/app1', 
        publicPath:'/app1/',
        outputPath:'../dist/app1',
        plugins:[
            ['@umijs/plugin-qiankun/slave', {}]
        ]
  }
```
app.js

```
export const qiankun = {
	// 应用加载之前
	async bootstrap(props) {
		console.log('appA bootstrap', props);
	},
	// 应用 render 之前触发
	async mount(props) {
		console.log('appA mount', props);
	},
	// 应用卸载之后触发
	async unmount(props) {
		console.log('appA unmount', props);
	}
};
```
#### 基础应用配置
.umirc.js

```
{
        base:'/base',
        publicPath:'/base/',
        outputPath:'../dist/base/',
        routes: [
            {
              path: '/',
              component: '../layouts/index',
              routes: [
                { path: '/', component: '../pages/index' },
                { path: '/app1' },//子应用路由，防止404
                { path: '/app2' }
              ]
            }
        ]
        plugins:[
        ['@umijs/plugin-qiankun',{
              master:{
                jsSandbox: true,
                prefetch: true
              }
            }]
        ]
}
```
app.js
```
export const qiankun = Promise.resolve({
  lifeCycles: {
    beforeLoad: props => {
      console.log('beforeLoad:', props);
    },
    beforeMount: props => {
      console.log('beforeMont:', props);
    },
    afterMount: props => {
      console.log('afterMount:', props);
    },
    beforeUnmount: props => {
      console.log('beforeUnmount:', props);
    },
    afterUnmount: props => {
      console.log('afterUmount:', props);
    }
  },
  apps:[
    {
      name:'app1',
      entry:'/app1',
      // entry:'http://localhost:8001/app1',
      base:'/base/app1',
      mountElementId: 'child-app',
      props:{
        params:'test-qiankun'
      }
    },
    {
      name:'app2',
      entry:'/app2',
      // entry:'http://localhost:8002/app2',
      base:'/base/app2',
      mountElementId: 'child-app',
    }
  ],
})

```
layout.js
```
export default = ()=><div id='child-app'></div>
```

[github](https://github.com/nenezsn/test-qiankun.git)

#### 启动
```
    cnpm install 
    cd app1-umi 
    npm run build 
    cd ..
    cd app2-umi
    npm run build 
    cd..
    cd base-umi
    npm run build 
    cd ..
    node server 

```