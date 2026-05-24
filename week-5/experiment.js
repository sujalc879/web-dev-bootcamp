const p = new Promise((resolve) => {
    console.log("before");
    
    resolve("1")
    resolve("2")
    resolve("3")
    
    console.log("after");
});

p.then((data) => {
    console.log("resolve number " + data);
    
})