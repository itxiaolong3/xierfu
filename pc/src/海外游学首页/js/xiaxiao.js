$('.mudi span').on('click', function () {
    $('.mudi span').css({
        'backgroundColor': 'rgba(255, 255, 255, 1)',
        'color': 'rgba(66, 164, 211, 1)'
    });
    $('.mudi .show').css({
        'display': 'none'
    });
    $(this).css({
        'backgroundColor': 'rgba(66, 164, 211, 1)',
        'color': 'rgba(255, 255, 255, 1)'
    });
    $('.mudi .show').eq($(this).index()).css({
        'display': 'block'
    });
});

$('.remen span').on('click', function () {
    $('.remen span').css({
        'backgroundColor': 'rgba(255, 255, 255, 1)',
        'color': 'rgba(66, 164, 211, 1)'
    });
    $('.remen .show').css({
        'display': 'none'
    });
    $(this).css({
        'backgroundColor': 'rgba(66, 164, 211, 1)',
        'color': 'rgba(255, 255, 255, 1)'
    });
    $('.remen .show').eq($(this).index()).css({
        'display': 'block'
    });
});