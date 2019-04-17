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
        // $(function () {
        //     var $ali=$(".nav1 li")
        //     for(var i=0;i<$ali.length;i++){
        //         $ali.eq(i).click(function () {
        //             if($(this).find("ul").is(':hidden')){
        //                 $(this).find("ul").show()
        //             }else{
        //                 $(this).find("ul").hide()
        //             }
        //         })
        //     }
        // })
/* $(function() {
    var $ali = $(".nav1>li");

    for (var i = 0; i < $ali.length; i++) {
        $ali.eq(i).click(function() {
            let ulHeight = $(this).children().children().length * 48;
            if($(this).find("ul").hasClass("undis")){
                $(this).find("ul").slideDown();
                $(this).siblings("li").find("ul").slideUp();
                $(this).siblings("li").find("ul").addClass("undis");
                $(this).siblings("li").find("span").css({
                    transform: "rotateZ(0deg)"
                })
                $(this).find("ul").removeClass("undis");
                $(this).find("span").css({
                    transform: "rotateZ(90deg)"
                });
            }else{
                $(this).find("ul").slideUp();
                $(this).find("ul").addClass("undis");
                $(this).find("span").css({
                    transform: "rotateZ(0deg)"
                })
            }
        })

    }
}); */