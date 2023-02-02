exports.encrypt = function (plainteks, key) {
    plainteks = plainteks.toUpperCase();
    plainteks = plainteks.replace(/[^A-Z]/gm, '');

    key = key.toUpperCase();
    key = key.replace(/[^A-Z]/gm, '');

    var newKey = "";
    if (key.length < plainteks.length) {
        newKey = key + plainteks;
    } else {
        newKey = key;
    }

    let cipherteks = "";
    for (let i = 0; i < plainteks.length; i++) {
        let delta = (plainteks.charCodeAt(i) + newKey.charCodeAt(i)) % 26;
        cipherteks += String.fromCharCode(delta+'A'.charCodeAt(0));
    }
    console.log(cipherteks);

    return cipherteks;
}

exports.decrypt = function (cipherteks, key) {
    cipherteks = cipherteks.toUpperCase();
    cipherteks = cipherteks.replace(/[^A-Z]/gm, '');

    key = key.toUpperCase();
    key = key.replace(/[^A-Z]/gm, '');

    let plainteks = "";
    for (let i = 0; i < key.length; i++) {
        let delta = (cipherteks.charCodeAt(i) - key.charCodeAt(i) + 26) %26;
        plainteks += String.fromCharCode(delta+'A'.charCodeAt(0));
    }

    if (key.length < cipherteks.length) {
        for (let i = key.length; i < cipherteks.length; i++) {
            let delta = (cipherteks.charCodeAt(i) - plainteks.charCodeAt(i - key.length) + 26) %26;
            plainteks += String.fromCharCode(delta+'A'.charCodeAt(0));
        }
    }

    return plainteks;
}