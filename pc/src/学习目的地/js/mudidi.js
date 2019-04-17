$('span').on('click',function(){
    
    $('span').css({'backgroundColor':'yellow'});
    $('.show').css({'display':'none'});
    $(this).css({'backgroundColor':'red'});
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
            $('.show').eq($(this).index()).css({'display':'block'});
    });