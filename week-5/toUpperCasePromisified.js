const fs = require('fs');

function readFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject("error while reading the file");
            } else {
                resolve(data);
            }
        })
    });
}

function writeFilePromisified(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err, data) => {
            if (err) {
                reject("error while writing in the file");
            } else {
                resolve(data);
            }
        })
    });
}


function writeUpperCaseInFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        readFilePromisified(filePath, encoding)
            .then((content) => {
                content = content.toUpperCase();
                writeFilePromisified(filePath, content)
                    .then(() => {
                        resolve("task done");
                    })
                    .catch(() => {
                        reject("task not done");
                    })
            })
    });
}


writeUpperCaseInFilePromisified("a.txt", "utf-8")
    .then((data) => {
        console.log(data);
        
    })
    .catch((data) => {
        console.log(data);
        
    })