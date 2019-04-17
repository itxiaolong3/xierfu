window.onload = function() {
    const a = 'http://47.107.191.81:8080'
        // 初始化样式
    function initStyle() {
        let lastHeight = $(".showItem li a").height() - 32 - $(".showItem li a h3").height() - $(".showItem li a p").height();
        let pHeight = $(".showItem li a p").height() + lastHeight + 33;
        $(".showItem li a").css({
            bottom: -pHeight
        })
    }
    initStyle();
    // 动效
    $(".showItem").on("mouseenter", "li", function() {
        $(this).children().filter("a").css({
            bottom: 0,
        })
    })
    $(".showItem").on("mouseleave", "li", function() {
        let lastHeight = $(".showItem li a").height() - 32 - $(".showItem li a h3").height() - $(".showItem li a p").height();
        let pHeight = $(".showItem li a p").height() + lastHeight + 33;
        $(".showItem li a").css({
            bottom: -pHeight
        })
    })
    $(".own").on("mouseenter", "li", function() {
        $(this).children().children().filter("div").css({
            bottom: 150,
        })
    })
    $(".own").on("mouseleave", "li", function() {
        $(this).children().children().filter("div").css({
            bottom: 60,
        })
    })

    $(".classicItem").on("mouseenter", "li", function() {
        $(this).children().filter("a").css({
            display: "block",
            opacity: 1,
        })
    })
    $(".classicItem").on("mouseleave", "li", function() {
        $(this).children().filter("a").css({
            display: "none",
            opacity: 0,
        })
    })

    // 初始化请求
    function initAjax() {
        // banner交互
        $.ajax({
                url: a + '/art/services/banner',
                dataType: 'json',
                type: 'get',
                success: function(result) {
                    var arr = result.resultData;
                    let html = template("banner", {
                        date: arr
                    })
                    $(".swiper-wrapper").html(html)
                    const mySwiper = new Swiper('.swiper-container', {
                        autoplay: true,
                        loop: true, // 循环模式选项
                    })
                }
            })
            // tab艺术分类
        $.ajax({
            url: a + '/art/services/category',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData;
                let html = template("artType", {
                    date: arr
                })
                $(".tab-t").html(html);
            }
        })

        // 热门推荐初始化请求
        hotRecom("government");
        // 经典回顾初始化请求
        classicRecom("government");

    }
    initAjax()

    // 热门推荐初始化请求
    function hotRecom(cary) {
        $.ajax({
            url: a + '/art/services/suggest/' + cary + '/1/6',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData.content;
                let html = template("hotRecom", {
                    date: arr
                })
                $("#gongpai").html(html);
                initStyle()
            }
        });
    }
    // 经典回顾初始化请求
    function classicRecom(cary) {
        $.ajax({
            url: a + '/art/services/classicmemory/' + cary + '/1/6',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData.content;
                let html = template("hotRecom", {
                    date: arr
                })
                $("#gongpai1").html(html)
            }
        })
    }
	
    $("#tab-t").on("click", "span", function() {
        $(this).css({
            'borderBottom': '2px solid red',
        });
        $(this).siblings().css({
            'borderBottom': '2px solid #EAEAEA',
        });
        // 点击切换请求
        hotRecom($(this).attr("type"))
    })

    $("#tab-t1").on("click", "span", function() {
        $(this).css({
            'borderBottom': '2px solid red',
        });
        $(this).siblings().css({
            'borderBottom': '2px solid #EAEAEA',
        });
        // 点击切换请求
        classicRecom($(this).attr("type"))
    })
}