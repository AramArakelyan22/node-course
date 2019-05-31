const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Sorry')
    }, 2000)
});

doWorkPromise
.then(data => console.log(data))
.catch(err=> console.log(err))