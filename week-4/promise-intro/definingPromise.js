class MyPromise {
    constructor(fn) {
        this.value = undefined;

        const resolve = (val) => {
            this.value = val
        }

        fn(resolve);
    }

    then(callback) {
        callback(this.value); 
    }
}


const p = new MyPromise((resolve, reject) => {
    resolve("hii");
})

p.then((value) => {
    console.log(value);
    
})

