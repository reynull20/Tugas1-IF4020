$(".btn-primary").on("click", function (event) {
    var prev = $('.active');
    prev.addClass("disable");
    prev.removeClass("active");

    $(this).addClass("active");
    $(this).removeClass("disable");

    if ($(this).attr('id') === 'affine') {
        $('#keyFormEnc').html(`Key (M*P+B)<br>
            <label for="keyStringEncA" class="form-label col-sm-4">M</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" id="keyStringEncA">
            <div>
            <label for="keyStringEncB" class="form-label col-sm-4">B</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" id="keyStringEncB">
            <div>
        `);
        $('#keyFormDec').html(`Key (M*P+B)<br>
            <label for="keyStringDecA" class="form-label col-sm-4">M</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" id="keyStringDecA">
            <div>
            <label for="keyStringDecB" class="form-label col-sm-4">B</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" id="keyStringDecB">
            <div>
        `);
    } else if($(this).attr('id') === 'hill') {
        $('#keyFormEnc').html(`
            <label for="keyString" class="form-label">Key</label>
            <textarea class="form-control" id="keyStringEnc" rows="3"></textarea>
        `);
        $('#keyFormDec').html(`
            <label for="keyString" class="form-label">Key</label>
            <textarea class="form-control" id="keyStringDec" rows="3"></textarea>
        `);
    } else {
        $('#keyFormEnc').html(`
            <label for="keyString" class="form-label">Key</label>
            <input type="text" class="form-control" id="keyStringEnc">
        `);
        $('#keyFormDec').html(`
            <label for="keyString" class="form-label">Key</label>
            <input type="text" class="form-control" id="keyStringDec">
        `);
    }
})