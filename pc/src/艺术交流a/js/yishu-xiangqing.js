window.onload = function () {

    $('.remen span').on('click', function () {
        $('.remen span').css({
            'borderBottom': '0'
        });
        $('.remen .show').css({
            'display': 'none'
        });
        $(this).css({
            'borderBottom': '2px solid red',
            'paddingBottom': '16px'
        });
        //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
        // eq索引
        $('.remen .show').eq($(this).index()).css({
            'display': 'block'
        });
    });

    $('.jingdian span').on('click', function () {
        $('.jingdian span').css({
            'borderBottom': '0'
        });
        $('.jingdian .show').css({
            'display': 'none'
        });
        $(this).css({
            'borderBottom': '2px solid red',
            'paddingBottom': '16px'
        });
        // eq索引
        $('.jingdian .show').eq($(this).index()).css({
            'display': 'block'
        });
    });
    $("body").on("hover", ".appear li", function (e) {
        $(this).children().filter("div").css({
            display: "block",
        })
    })
    $("body").on("mouseleave", ".appear li", function (e) {
        $(this).children().filter("div").css({
            display: "none",
        })
    })
    const a = 'http://47.107.191.81:8080'
    // 页面加载初始化请求
    function initAjax() {
        // banner交互
        $.ajax({
            url: a + '/art/services/banner',
            dataType: 'json',
            type: 'get',
            success: function (result) {
                var arr = result.resultData
                let html = template("banner", {
                    data: arr
                });
                $(".swiper-wrapper").html(html);
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true, // 垂直切换选项
                    loop: true, // 循环模式选项
                })
            }
        });
        let id = location.search.split("=")[1];
        // 详情
        $.ajax({
            url: a + '/art/services/detail/' + id,
            dataType: 'json',
            type: 'get',
            success: function (result) {
                console.log(result.resultData);
                let arr = result.resultData
                let html = template("detail", {
                    data: arr
                });
                // console.log(JSON.parse(html))
                $(".content").html(html)
            }
        });
        // 详情页经典回顾的接口
        $.ajax({
            url: a + '/classicmemory/services/listbyart/'+id+'/1/8',
            dataType: 'json',
            type: 'get',
            success: function (result) {
                let arr = result.resultData.content;
                let html = template("review", {
                    data: arr
                });
                console.log(arr,'经典回顾')
                $(".own ul").html(html)
            }
        })
    }

    initAjax()
}