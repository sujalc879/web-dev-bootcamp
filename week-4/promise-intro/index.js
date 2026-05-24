const fs = require("fs");



function readFilePromisifiy(path) {
    return new Promise((resolve, reject) => {
        
        fs.readFile(`${path}`, "utf-8", (err, data) => {
            resolve(data);
            
        })
    })
}

function fileRead(data) {
    console.log("Your data is " + data);
    
}

readFilePromisifiy("a.txt").then(fileRead);