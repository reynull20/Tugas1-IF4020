exports.encrypt = function (plainteks, key) {
    // Preprocess the key and plainteks
    plainteks = plainteks.toUpperCase();
    plainteks = plainteks.replace(/[^A-Z]/gm, '');

    key = key.toUpperCase();
    key = key.replace(/[^A-Z]/gm, '');

    let cipherteks = "";

    for (let i = 0; i < plainteks.length; i++) {
        let delta = (plainteks.charCodeAt(i) + key.charCodeAt(i%key.length)) %26;
        cipherteks += String.fromCharCode(delta+'A'.charCodeAt(0));
    }

    return cipherteks;
}

exports.decrypt = function (cipherteks, key) {
    // Preprocess the key and cipherteks
    cipherteks = cipherteks.toUpperCase();
    cipherteks = cipherteks.replace(/[^A-Z]/gm, '');

    key = key.toUpperCase();
    key = key.replace(/[^A-Z]/gm, '');

    let plainteks = "";

    for (let i = 0; i < cipherteks.length; i++) {
        let delta = (cipherteks.charCodeAt(i) - key.charCodeAt(i%key.length) + 26) %26;
        plainteks += String.fromCharCode(delta+'A'.charCodeAt(0));
    }

    return plainteks;
}