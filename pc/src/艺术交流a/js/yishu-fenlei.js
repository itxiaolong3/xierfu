const a = 'http://47.107.191.81:8080';
// 条件列表
let term = {
    category: '',
    country: '',
    age: '',
    joinType: '',
};
window.onload = function() {
    function initAjax() {
        // banner交互
        $.ajax({
            url: a + '/art/services/banner',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData
                var html = template("banner", {
                    date: arr
                })
                $('.swiper-wrapper').html(html);
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true, // 循环模式选项
                })
            }
        });
        //艺术类型接口
        $.ajax({
            url: a + '/art/services/category',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData
                let html = template("artType", {
                    date: arr
                })
                $("#p1").html(html);
            }
        });
        //国家接口
        $.ajax({
            url: a + '/art/services/country',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData;
                let html = template("countryType", {
                        date: arr
                    })
                    // console.log(arr)
                $('#p2').html(html)
            }
        });
        //适应年龄接口
        $.ajax({
            url: a + '/art/services/age',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData;
                let html = template("suitableAge", {
                    date: arr
                })
                $('#p3').html(html)
            }
        });
        //参加类型接口
        $.ajax({
            url: a + '/art/services/jointype',
            dataType: 'json',
            type: 'get',
            success: function(result) {
                var arr = result.resultData;
                let html = template("joinType", {
                    date: arr
                })
                $('#p4').html(html)
            }
        });
        // 热门游学
        $.ajax({
            url:a+"/studytour/services/hot/page/1/6",
            dataType:"json",
            type:"get",
            data:{
                isHot:1,
            },
            success:function(result){
                let arr = result.resultData.content;
                console.log(arr);
                let html = template("hotStudy",{data:arr})
                $(".youxue").html(html)
            }
        })


        initPageAjax(1)
    }
    initAjax();

    function initPageAjax(page, term) {
        //筛选列表
        $.ajax({
            url: a + `/art/services/page/${page}/10`,
            dataType: 'json',
            type: 'post',
            data: term,
            success: function(result) {
                var arr = result.resultData.content;
                let html = template("filterList", {
                    data: arr
                })
                $("#xiangqing-ul").html(html);

                //图片mask
                $("#xiangqing-ul li").bind("mouseenter mouseleave",function(e) {
                    var w = $(this).width();
                    // var w = 461;
                    var h = $(this).height();
                    var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                    var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                    //alert(x);
                    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                    //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
                    var eventType = e.type;
                    //alert(e.type);
                    if(e.type == 'mouseenter'){
                        if(direction==1){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'452px'});
                        }else if(direction==3){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'452px'});
                        }else if(direction==2){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'452px'});
                        }else if(direction==0){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'452px'});
                        }

                    }else{
                        if(direction==1){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==3){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==2){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==0){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }
                    }
                });
                //end
				$("#xiangqing-ul .yuyue-btn").bind("click",function(){
					$(".yuyue-tan").show(1000);
					return false;
				});
				$(".img-close").bind("click",function(){
					$(".yuyue-tan").hide(1000);
				})
				
                // 分页器
                if (result.resultData.totalPages > 0) {
                    const slp = new SimplePagination(result.resultData.totalPages);
                    slp.init({
                        container: '.navButtom',
                        maxShowBtnCount: 3,
                        onPageChange: state => {
                            listAjax(state.pageNumber)
                        }
                    })
                } else {
                    $(".navButtom").children().remove()
                }
            }
        })
    }

    function listAjax(page, term) {
        //筛选列表
        $.ajax({
            url: a + `/art/services/page/${page}/10`,
            dataType: 'json',
            type: 'post',
            data: term,
            success: function(result) {
                var arr = result.resultData.content;
                let html = template("filterList", {
                    data: arr
                })
                $("#xiangqing-ul").html(html);
				$("#xiangqing-ul li").bind("mouseenter mouseleave",function(e) {
                    var w = $(this).width();
                    // var w = 461;
                    var h = $(this).height();
                    var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                    var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                    //alert(x);
                    var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                    //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
                    var eventType = e.type;
                    //alert(e.type);
                    if(e.type == 'mouseenter'){
                        if(direction==1){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'740px'});
                        }else if(direction==3){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'740px'});
                        }else if(direction==2){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'740px'});
                        }else if(direction==0){
                            $(this).find('.artItemRight').css({'display':'block','left':w+'px','top':'0px'}).animate({'left':'740px'});
                        }

                    }else{
                        if(direction==1){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==3){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==2){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }else if(direction==0){
                            $(this).find('.artItemRight').animate({'left':w+'px'});
                        }
                    }
                });
                //end
                $(".yuyue-btn").on('click',function () {
                    alert('yuyue');
                })
            }
        })
    }



    function againAjax() {
        let index = 1;
        $("#p1").on("click", "em", function() {
            term.category = $(this).attr("code");
            $(this).css({
                backgroundColor: "#098aca",
                color: "#fff",
            }).siblings().css({
                backgroundColor: "transparent",
                color: "#000",
            })
            initPageAjax(index, term)
        });
        $("#p2").on("click", "em", function() {
            term.country = $(this).attr("code");
            $(this).css({
                backgroundColor: "#098aca",
                color: "#fff",
            }).siblings().css({
                backgroundColor: "transparent",
                color: "#000",
            })
            initPageAjax(index, term)
        });
        $("#p3").on("click", "em", function() {
            term.age = $(this).attr("code");
            $(this).css({
                backgroundColor: "#098aca",
                color: "#fff",
            }).siblings().css({
                backgroundColor: "transparent",
                color: "#000",
            })
            initPageAjax(index, term)
        });
        $("#p4").on("click", "em", function() {
            term.joinType = $(this).attr("code");
            $(this).css({
                backgroundColor: "#098aca",
                color: "#fff",
            }).siblings().css({
                backgroundColor: "transparent",
                color: "#000",
            })
            initPageAjax(index, term)
        });

    }
    againAjax()

}