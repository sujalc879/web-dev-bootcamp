function setTimeOutPromisified(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}

setTimeOutPromisified(3000)
    .then((value) => {
        console.log(value/1000 + " seconds has passed");
        
    })