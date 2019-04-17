$('.remen span').on('click',function(){
    
    $('.remen span').css({'borderBottom':'0'});
    $('.remen .show').css({'display':'none'});
    $(this).css({'borderBottom':'2px solid red','paddingBottom':'16px'});
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
            $('.remen .show').eq($(this).index()).css({'display':'block'});
    });

    $('.jingdian span').on('click',function(){
        
        $('.jingdian span').css({'borderBottom':'0'});
        $('.jingdian .show').css({'display':'none'});
        $(this).css({'borderBottom':'2px solid red','paddingBottom':'16px'});
        //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
        // eq索引
                $('.jingdian .show').eq($(this).index()).css({'display':'block'});
        });

        