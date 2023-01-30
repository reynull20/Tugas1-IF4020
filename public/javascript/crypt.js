function refresh(id) {
    $(id).css({
        "background-color": "white"
    })
}

$("#encryptBtn").on("click", function (event) {
    refresh("#plaintextString")

    // Request Encryption
    var encryptType = $('.active').attr('id');    
    $.post("/encrypt", {
        plainteks: $("#plaintextString").val(),
        key: $("#keyStringEnc").val(),
        type: encryptType
    },
    function (data, status) {
        cipher = JSON.parse(data)
        $('#cyphertextString')
            .val(cipher.cipherteks)
            .css({
                "background-color": "rgb(237, 238, 255)",
            });
    })
});

$("#decryptBtn").on("click", function (event) {
    refresh("#cyphertextString")

    // Request Decryption
    var encryptType = $('.active').attr('id');    
    $.post("/encrypt", {
        cipherteks: $("#cyphertextString").val(),
        key: $("#keyStringDec").val(),
        type: encryptType
    },
    function (data, status) {
        cipher = JSON.parse(data)
        $('#plaintextString')
            .val(cipher.cipherteks)
            .css({
                "background-color": "rgb(237, 238, 255)"
            });
    })
});