const math = require('math');
var num = 26;

exports.encrypt = function (plainteks, m, b) {
    let invM = math.invmod(m,num);

    plainteks = plainteks.toUpperCase();
    plainteks = plainteks.replace(/[^A-Z]/gm, '');

    let cipherteks = "";

    plainteks.forEach(element => {
        let char = element.charCodeAt(0) - 'A'.charCodeAt(0);
        char = (m * char + b) % num;
        cipherteks += String.fromCharCode(char);
    });

    return cipherteks;
}

exports.decrypt = function (cipherteks, m, b) {
    let invM = math.invmod(m,num);

    cipherteks = cipherteks.toUpperCase();
    cipherteks = cipherteks.replace(/[^A-Z]/gm, '');

    let plainteks = "";

    plainteks.forEach(element => {
        let char = element.charCodeAt(0) - 'A'.charCodeAt(0);
        char = (m * (char - b)) % num;
        cipherteks += String.fromCharCode(char);
    })
}