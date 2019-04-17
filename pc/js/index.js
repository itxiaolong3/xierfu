$('span').on('click',function(){
    
    $('span').css({'borderBottom':'0'});
    $('.show').css({'display':'none'});
    $(this).css({'borderBottom':'2px solid red','paddingBottom':'16px'});
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
            $('.show').eq($(this).index()).css({'display':'block'});
    });