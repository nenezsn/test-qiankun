export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = new Promise(resolve => {
	resolve({
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
		}
	});
});
