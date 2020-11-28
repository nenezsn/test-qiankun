export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

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
    // app_1的dom节点由qiankun生成， entry 会往 id = app_1的dom节点注入html,从而在此节点下，渲染子应用
    {
      name:'app1',
      entry:'/app1',
      // entry:'http://localhost:8001/app1',
      base:'/base/app1',//子应用路由前缀，通常跟子应用的 base 配置 一致，框架会以这个配置作为前缀判断是否激活当前应用，支持配置一组前缀
      mountElementId: 'child-app',//在base应用，预留的子应用插槽
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
