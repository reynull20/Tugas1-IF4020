function refresh(id) {
    $(id).css({
        "background-color": "white"
    })
}

$("#encryptBtn").on("click", function (event) {
    refresh("#plaintextString")

    var encryptType = $('.active').attr('id');
    var key = () => {
        if (encryptType === 'affine') {
            return [$("#keyStringEncA").val(),$("#keyStringEncB").val()]
        } else {
            return $("#keyStringEnc").val()
        }
    }

    // Request Encryption
    $.post("/encrypt", {
        plainteks: $("#plaintextString").val(),
        key: key,
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
    var key = () => {
        if (encryptType === 'affine') {
            return [$("#keyStringDecA").val(),$("#keyStringDecB").val()]
        } else {
            return $("#keyStringDec").val()
        }
    }

    $.post("/decrypt", {
        cipherteks: $("#cyphertextString").val(),
        key: key,
        type: encryptType
    },
    function (data, status) {
        cipher = JSON.parse(data)
        $('#plaintextString')
            .val(cipher.plainteks)
            .css({
                "background-color": "rgb(237, 238, 255)"
            });
    })
});