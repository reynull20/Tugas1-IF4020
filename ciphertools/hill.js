const math = require('math');

exports.encrypt = function (plainteks, key) {
    let newKey = keyTransform(key);

    let cipherteks = "";
    for (let i = 0; i < plainteks.length; i += math.size(newkey)[0]) {
        let seq = plainteks.slice(i,math.size(newkey)[0]);
        seq = math.matrix(seq);
        seq.map(e => e.charCodeAt(0) - 'A'.charCodeAt(0));
        let res = math.multiply(newkey,seq);

        res.forEach(element => {
            cipherteks += String.fromCharCode(element);
        });
    }

    return cipherteks;
}

exports.decrypt = function (cipherteks, key) {
    let newKey = keyTransform(key);
    newKey = math.inv(newKey);

    let plainteks = "";
    for (let i = 0; i < cipherteks.length; i += math.size(newkey)[0]) {
        let seq = cipherteks.slice(i,math.size(newkey)[0]);
        seq = math.matrix(seq);
        seq.map(e => e.charCodeAt(0) - 'A'.charCodeAt(0));
        let res = math.multiply(newkey,seq);

        res.forEach(element => {
            plainteks += String.fromCharCode(element);
        });
    }

    return plainteks;
}

function keyTransform(key) {
    let newKey = '';

    // Do string to matrix transformation here

    return newKey
}