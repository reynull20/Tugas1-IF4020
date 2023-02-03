exports.encrypt = function (plainteks, key) {
    plainteks.toLowerCase();
    plainteks.replace(/[^a-z]/gm, '');

    key.toLowerCase();
    key.replace(/[^a-z]/gm, '');

    if (plainteks.length % 2 != 0) {
        plainteks += 'z'
    }

    let newKey = generateKey(key);
    let temp = new Array(4).fill(0);
    let cipherteks = new Array(plainteks.length);

    for (let i = 0; i < plainteks.length; i += 2) {
        let pos = search(newKey,plainteks[i],plainteks[i+1],temp);
        let n1 = pos[0]; let n2 = pos[1];
        let n3 = pos[2]; let n4 = pos[3];
        if (n1 == n3) {
            cipherteks[i] = newKey[n1*5+((n2+1) % 5)];
            cipherteks[i+1] = newKey[n3*5+((n4+1) % 5)];
        } else if (n2 == n4) {
            cipherteks[i] = newKey[(n1+1)*5+(n2 % 5)];
            cipherteks[i+1] = newKey[(n3+1)*5+(n4 % 5)];
        } else {
            cipherteks[i] = newKey[n1*5+(n4 % 5)];
            cipherteks[i+1] = newKey[n3*5+(n2 % 5)];
        }

    }

    return cipherteks.toString().replaceAll(',','');
}

exports.decrypt = function (cipherteks, key) {
    cipherteks.toLowerCase();
    cipherteks.replace(/[^a-z]/gm, '');

    key.toLowerCase();
    key.replace(/[^a-z]/gm, '');

    let newKey = generateKey(key);
    let temp = new Array(4).fill(0);
    let plainteks = new Array(cipherteks.length);

    for (let i = 0; i < cipherteks.length; i += 2) {
        let pos = search(newKey,cipherteks[i],cipherteks[i+1],temp);
        let n1 = pos[0]; let n2 = pos[1];
        let n3 = pos[2]; let n4 = pos[3];
        if (n1 == n3) {
            plainteks[i] = newKey[n1*5+((n2+4) % 5)];
            plainteks[i+1] = newKey[n3*5+((n4+4) % 5)];
        } else if (n2 == n4) {
            plainteks[i] = newKey[(n1-1)*5+(n2 % 5)];
            plainteks[i+1] = newKey[(n3-1)*5+(n4 % 5)];
        } else {
            plainteks[i] = newKey[n1*5+(n4 % 5)];
            plainteks[i+1] = newKey[n3*5+(n2 % 5)];
        }
    }

    
    return plainteks.toString().replaceAll(',','');
}

function unique(text) {
    return String.prototype.concat.call(...new Set(text));
}

function generateKey(key) {
    var dict = 'abcdefghiklmnopqrstuvwxyz';
    var newKey = key + dict;
    newKey = unique(newKey);

    // Convert to array
    return Array.from(newKey);
}

function search(key, a, b, arr) {
    if (a == 'j') a = 'i'
    else if (b == 'j') b = 'i'

    idxA = key.indexOf(a);
    arr[1] = idxA % 5;
    arr[0] = (idxA / 5) | 0;

    idxB = key.indexOf(b);
    arr[2] = (idxB / 5) | 0;
    arr[3] = idxB % 5;

    return arr;
}

