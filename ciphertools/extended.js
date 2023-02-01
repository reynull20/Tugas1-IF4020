const fs = require('fs');

exports.encrypt = function (key) {
    let fileR = fs.createReadStream('../uploaded/'+fs.readdir("../uploaded/")[0]);
    let fileW = fs.createWriteStream('../test/')
    
    let idx = 0;
    fileR.on('data', (chunk) => {
        fileW.write((chunk + key[i]) % 256);
        idx = (idx+1) % key.length;
    })
}

exports.decrypt = function (key) {
    let fileR = fs.createReadStream('../test/'+fs.readdir("../uploaded/")[0]);
    let fileW = fs.createWriteStream('../uploaded/')
    
    let idx = 0;
    fileR.on('data', (chunk) => {
        fileW.write((chunk - key[i] + 256) % 256);
        idx = (idx+1) % key.length;
    })
}