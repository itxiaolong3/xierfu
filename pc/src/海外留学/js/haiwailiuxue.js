$('span').on('click',function(){
    
    $('span').css({'backgroundColor':'yellow'});
    $('.show').css({'display':'none'});
    $(this).css({'backgroundColor':'red'});
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
            $('.show').eq($(this).index()).css({'display':'block'});
    });


//侧边栏
$("#left-panel-link").mouseover(function () {
    $("#left-panel").addClass("animated fadeInLeftBig");
    $("#left-panel").css("display","block");
});
$("#left-panel-link").mouseout(function () {
    $("#left-panel").removeClass("fadeInLeftBig");
    $("#left-panel").mouseover(function () {
        $(this).css("display","block")
    });
    $("#left-panel").mouseout(function () {
        $(this).css("display","none")
    })
});
$(".icon-top-search").click(function () {
    $(this).hide();
    $(this).siblings(".search").show(1000);
});
$(".search img").click(function () {
    $(this).parent().hide(1000);
    $(this).parent().siblings(".icon-top-search").show();
});

$('#left-panel-link').panelslider();
$('body').click(function() {
    $.panelslider.close();
});
$(".box ul li a").mouseover(function () {
    $(this).find("img").attr("src","images/iconRightBlue.png");
});
$(".box ul li a").mouseout(function () {
    $(this).find("img").attr("src","images/iconRight.png");
});