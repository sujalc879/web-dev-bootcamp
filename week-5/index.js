const fs = require('fs');

function readFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            console.log(data);
            resolve(data);

        })
    })
}

readFilePromisified("a.txt", "utf-8")
    .then((data) => {
        console.log("data is " + data);

    })