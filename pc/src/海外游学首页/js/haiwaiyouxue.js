window.onload = function () {
	//热门产品切换
    $('.tab-span').on('click', function () {
        $('.tab-span').css({
            'borderBottom': '0'
        });
        $('.show').css({
            'display': 'none'
        });
        $(this).css({
            'borderBottom': '3px solid rgba(0, 116, 209, 1)'
        });
        // eq索引
        $('.show').eq($(this).index()).css({
            'display': 'block'
        });
        initBriefPosition();
    });
	// 热门产品动效
    function initBriefPosition() {
        let lastHeight = $(".brief").height() - 16 - $(".brief span").height() - $(".brief p").height();
        let pHeight = $(".brief p").height() + lastHeight + 38;
        $(".brief").css("bottom", -pHeight);
    }
    $(".projack").mouseenter(function () {
        $(this)[0].children[1].style.bottom = "0px";
    });
    $(".projack").mouseleave(initBriefPosition);
	
    // 海外游学板块特效
    $(".study").mouseenter(function () {
        $(this).siblings().children().filter(".present").css("opacity", "0");
        $(this)[0].children[1].style.opacity = "1";
    });
    $(".study").mouseleave(function () {
        $(this).siblings().children().filter(".present").css("opacity", "0");
        $(this)[0].children[1].style.opacity = "0";
    })
    
    


    // 热门营地动效
    $(".schoolItem").mouseenter(function () {
        $(this).children().filter(".own").css("bottom", "30%")
    })
    $(".schoolItem").mouseleave(function () {
        $(".schoolItem").children().filter(".own").css("bottom", "60px")
    })
    const a = 'http://47.107.191.81:8080';
    // 条件列表
    let term = {
        category: '',
        country: '',
        age: '',
        joinType: '',
    };
    // 初始化请求
    function initAjax() {
        // banner交互
        $.ajax({
            url: a + '/studytour/services/banners',
            dataType: 'json',
            type: 'get',
            success: function (result) {
                var arr = result.resultData;
                let html = template("banner", {
                    data: arr
                })
                $('.swiper-wrapper').html(html);
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true, // 循环模式选项
                })
            }
        });
        $.ajax({
            url:a+"/studytour/services/page/1/6?category=YXLX",
            dataType:"json",
            type:"get",
            success:function(result){
                let arr = result.resultData.content;
                let html = template("jinpingyouxue", {
                    data: arr
                });
                console.log(arr,'精品游学');
                $("#jpyx").html(html);
				initBriefPosition();
				$(".projack").mouseenter(function () {
					$(this)[0].children[1].style.bottom = "0px";
				});
				$(".projack").mouseleave(initBriefPosition);
				
                console.log(result);
            }
        });
		$.ajax({
            url:a+"/studytour/services/page/1/6?category=YXLX",
            dataType:"json",
            type:"get",
            success:function(result){
                let arr = result.resultData.content;
                let html = template("gzxxHtml", {
                    data: arr
                });
                console.log(arr,'高中夏校');
                $("#gzxx").html(html);
				initBriefPosition();
				$(".projack").mouseenter(function () {
					$(this)[0].children[1].style.bottom = "0px";
				});
				$(".projack").mouseleave(initBriefPosition);
				
                console.log(result);
            }
        });
		$.ajax({
            url:a+"/studytour/services/page/1/6?category=YXLX",
            dataType:"json",
            type:"get",
            success:function(result){
                let arr = result.resultData.content;
                let html = template("dxxxHtml", {
                    data: arr
                });
                console.log(arr,'高中夏校');
                $("#dxxx").html(html);
				initBriefPosition();
				$(".projack").mouseenter(function () {
					$(this)[0].children[1].style.bottom = "0px";
				});
				$(".projack").mouseleave(initBriefPosition);
				
                console.log(result);
            }
        });
        $.ajax({
            url:a+"/studytour/services/hot/page/1/6",
            dataType:"json",
            type:"get",
            success:function(result){
                let arr = result.resultData.content;
                let html = template("hotyouxue", {
                    data: arr
                });
                console.log(arr,'热门游学')
                $("#hotyx").html(html);
				initBriefPosition();
				$(".projack").mouseenter(function () {
					$(this)[0].children[1].style.bottom = "0px";
				});
				$(".projack").mouseleave(initBriefPosition);
                console.log(result)
            }
        })
        $.ajax({
            url:a+"/studytour/services/page/1/6?category=YXLX",
            dataType:"json",
            type:"get",
            success:function(result){
                let arr = result.resultData.content;
                let html = template("yanxuelixing", {
                    data: arr
                });
                console.log(arr,'研学旅行')
                $("#yxlx").html(html);
				initBriefPosition();
				$(".projack").mouseenter(function () {
					$(this)[0].children[1].style.bottom = "0px";
				});
				$(".projack").mouseleave(initBriefPosition);
                console.log(result)
            }
        })
    }

    


    initAjax()

}