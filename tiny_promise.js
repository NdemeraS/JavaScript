
const executorFn = (resolve, reject) => {
    resolve('Resolved!');
  };
  
  const promise = new Promise(executorFn);

  console.log(promise);