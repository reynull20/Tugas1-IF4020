exports.encrypt = function (plainteks, key) {
    plainteks.replace(/[^A-Z]/gm, '');
    plainteks.toLowerCase();

    key.replace(/[^A-Z]/gm, '');
    key.toLowerCase();

    if (plainteks.length % 2 != 0) {
        plainteks += 'z'
    }
}

exports.decrypt = function (cipherteks, key) {
    
}

function unique(text) {
    return String.prototype.concat.call(...new Set(text));
}

function generateKey(key) {
    var dict = 'abcdefghiklmnopqrstuvwxyz'
    var newKey = key + dict;
    newKey = unique(newKey);

    // Convert to 5x5 array
    keyArray = Array.from(newKey);
    
}