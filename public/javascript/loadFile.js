$('#encryptFile').on("change", function (e) {
    var fr = new FileReader();
    fr.onload = function () {
        $('#plaintextString').val(fr.result);
    }

    fr.readAsText(this.files[0]);
})

$('#decryptFile').on("change", function (e) {
    var fr = new FileReader();
    fr.onload = function () {
        $('#cyphertextString').val(fr.result);
    }

    fr.readAsText(this.files[0]);
})

$("#uploadFileEncrypt").on("click", function (event) {
    event.preventDefault();
    var fd = new FormData();
    // var files = $('#encryptFile')[0].files[0];
    // fd.append('name', 'encryptionfile');
    fd.append('files', $('#encryptFile')[0].files[0]);
    // console.log(fd);

    $.ajax({
        url: '/encryptFile',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            console.log('SUCCESS');
        }
    })
})