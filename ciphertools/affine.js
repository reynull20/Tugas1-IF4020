const math = require('mathjs');
var num = 26;

exports.encrypt = function (plainteks, m, b) {
    plainteks = plainteks.toUpperCase();
    plainteks = plainteks.replace(/[^A-Z]/gm, '');

    let cipherteks = "";

    for (let i = 0; i < plainteks.length; i++) {    
        let char = plainteks.charCodeAt(i) - 'A'.charCodeAt(0);
        char = (m * char + b) % num;
        cipherteks += String.fromCharCode(char + 'A'.charCodeAt(0));
    }

    return cipherteks;
}

exports.decrypt = function (cipherteks, m, b) {
    let invM = math.invmod(m,num);

    cipherteks = cipherteks.toUpperCase();
    cipherteks = cipherteks.replace(/[^A-Z]/gm, '');

    let plainteks = "";

    [...cipherteks].forEach(element => {
        let char = element.charCodeAt(0) - 'A'.charCodeAt(0);
        char = (invM * (char - b)) % num;
        char = (char + num) % num; // for handling the negative result from %
        plainteks += String.fromCharCode(char + 'A'.charCodeAt(0));
    })

    return plainteks;
}