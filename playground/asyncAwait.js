const doWorkPromise =  (a, b) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        if(a < 0 || b < 0){
            return reject('numbers must not be negative')
        }
        resolve(a + b)
    }, 2000)
});

const doWork = async () => {
   const sum1 = await doWorkPromise(1, 2);
   const sum2 = await doWorkPromise(sum1, -5);
   return await doWorkPromise(sum2, 6);
}

//doWorkPromise(5, 6)

doWork().then(result => console.log(result))
    .catch(err => console.log(err));
