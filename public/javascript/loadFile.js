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

async function getNewFileHandle() {
    const options = {
        startIn: 'downloads',
        types: [
            {
                description: 'Text Files',
                accept: {
                    'text/plain':['.txt'],
                }
            }
        ]
    }
    const handle = await window.showSaveFilePicker(options)
    return handle;
}

async function writeFile(fileHandle, contents) {
    const writable = await fileHandle.createWritable();
    await writable.write(contents)
    await writable.close()
}

$("#save-encryption").on("click", async function(event) {
    const content = $("#plaintextString").val()
    const handle = await getNewFileHandle();
    const write = writeFile(handle,content)
})

$("#save-decryption").on("click", async function(event) {
    const content = $("#cyphertextString").val()
    const handle = await getNewFileHandle();
    const write = writeFile(handle,content)
})