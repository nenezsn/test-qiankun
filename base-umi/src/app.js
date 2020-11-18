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
    {
      name:'app1',
      entry:'/app1',
      // entry:'http://localhost:8001/app1',
      base:'/base/app1',
      path:'/base/app1',
      key: 'app1',
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
      path:'/base/app2',
      key: 'app2',
      mountElementId: 'child-app',
    }
  ],
})
