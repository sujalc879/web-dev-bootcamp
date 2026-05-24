

function setTimeoutPromisified(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        
        }, time);
    });
};

function callback(value) {
    console.log(value/1000 + " seconds has passed");
    
}

setTimeoutPromisified(5000).then(callback);