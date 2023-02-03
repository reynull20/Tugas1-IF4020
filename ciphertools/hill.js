const e = require('express');
const { sqrt } = require('mathjs');
const math = require('mathjs');

exports.encrypt = function (plainteks, key) {
    plainteks = plainteks.toUpperCase();
    plainteks = plainteks.replace(/[^A-Z]/gm, '');
    
    let newKey = keyTransform(key);

    let cipherteks = "";
    for (let i = 0; i < plainteks.length; i += math.size(newKey)[0]) {
        let seq = plainteks.slice(i,i+math.size(newKey)[0]);
        seq = seq.split('');
        seq = seq.map(e => e.charCodeAt(0) - 'A'.charCodeAt(0));
        if(seq.length < newkey.length){
            while (seq.length < newkey.length) {
                seq.push('Z'.charCodeAt(0) - 'A'.charCodeAt(0))   
            }
        }
        let res = math.multiply(newKey,seq);

        res.forEach(element => {
            cipherteks += String.fromCharCode((element % 26) + 'A'.charCodeAt(0));
        });
    }

    return cipherteks;
}

exports.decrypt = function (cipherteks, key) {
    let newkey = keyTransform(key);
    newkey = matInv(newkey);

    cipherteks = cipherteks.toUpperCase();
    cipherteks = cipherteks.replace(/[^A-Z]/gm, '');

    let plainteks = "";
    for (let i = 0; i < cipherteks.length; i += math.size(newkey)[0]) {
        let seq = cipherteks.slice(i,i+math.size(newkey)[0]);
        seq = seq.split('');
        seq = seq.map(e => e.charCodeAt(0) - 'A'.charCodeAt(0));
        if(seq.length < newkey.length){
            while (seq.length < newkey.length) {
                seq.push('Z'.charCodeAt(0) - 'A'.charCodeAt(0))   
            }
        }
        console.log(seq);
        let res = math.multiply(newkey,seq);

        res.forEach(element => {
            plainteks += String.fromCharCode((element % 26) + 'A'.charCodeAt(0));
        });
    }

    return plainteks;
}

function keyTransform(key) {
    let newKey = [];
    key = key.split('\n');
    key.forEach(element => {
        newKey.push((element.split(' ')).map(Number));
    });
    return newKey
}

function matInv(key) {
    // 1. Find inverse mod of the Determinant of key
    let detKey = math.det(key)
    let invKeyDet = math.invmod(detKey,26)

    // Using mathjs lib, multiply the inverse with its determinant
    // and its inverse mod of its determinant
    // i.e. det(K^-1) * Cofactor(K)
    let inverseKey = math.multiply(math.inv(key), (detKey * invKeyDet));
    inverseKey = math.round(inverseKey);
    inverseKey = math.mod(inverseKey,26);
    console.log(inverseKey);

    return inverseKey;
}