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