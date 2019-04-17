$('.remen span').on('click',function(){
    $('.remen span').css({'borderBottom':'0'});
    $('.remen .show').css({'display':'none'});
    $(this).css({'borderBottom':'2px solid red','paddingBottom':'16px'});
            $('.remen .show').eq($(this).index()).css({'display':'block'});
    });
    $('.ul01>li').on('click',function(){
        // alert(123)
        $('.ul01>li').css({'borderBottom':'0'});
        $('.ul01 .show').css({'display':'none'});
        $(this).css({'borderBottom':'1px solid rgba(242, 242, 242, 1)','paddingBottom':'16px'});
                $('.ul01 .show').eq($(this).index()).css({'display':'block'});
        });
        $(function () {
            var $ali=$(".ul01>li")
            for(var i=0;i<$ali.length;i++){
                $ali.eq(i).click(function () {
                    if($(this).find("ul").is(':hidden')){
                        $(this).find("ul").show()
                    }else{
                        $(this).find("ul").hide()
                    }
                })
            }
        })