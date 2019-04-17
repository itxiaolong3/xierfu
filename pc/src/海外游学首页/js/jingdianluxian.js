// 条件列表
let term = {
    category: 'JDXL',
    country: '',
    area: '',
    city: '',
    days: '',
    grade: '',
    subject: '',
};
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
    $(".gx_type").on("click","em",function(){
        $(this).css({
            backgroundColor:'#098aca',
            color:"#fff",
        }).siblings().filter("em").css({
            backgroundColor:'transparent',
            color:"#6E6E6E",
        })
    })
    $('#p2').html('')
    $('#p3').html('')
    $("#p1").on("click","em",function(){
        term.country = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.country,'p1得到')
        //出行地区
        $.ajax({
            url: a + '/studytour/services/country?category=JPXL&countryCode='+term.country,
            dataType: 'json',
            type: 'get',
            success: function (result) {
                var arr = result.resultData;
                let html = template("areaType", {
                    date: arr
                })
                $('#p2').html(html)
                $('#p3').html('')//切换城市就清空城市
                console.log(arr,'出行地区')
            }
        })

    })
    $("#p2").on("click","em",function(){
        term.area = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.area,'p2得到')
        //出行城市
        $.ajax({
            url: a + '/studytour/services/country?category=JPXL&countryCode='+term.country+'&areaCode='+term.area,
            dataType: 'json',
            type: 'get',
            success: function (result) {
                var arr = result.resultData;
                let html = template("cityType", {
                    date: arr
                })
                $('#p3').html(html)
                console.log(arr,'出行地区')
            }
        })
    })
    $("#p3").on("click","em",function(){
        term.city = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.city,'p3得到')
    })
    $("#p4").on("click","em",function(){
        term.days = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.days,'天数得到')
    })
    $("#p5").on("click","em",function(){
        term.grade = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.grade,'p5年级分类得到')
    })
    $("#p6").on("click","em",function(){
        term.subject = $(this).attr("code");
        initPageAjax(1,term);
        console.log(term.subject,'p6主题得到')
    })
    const a = 'http://47.107.191.81:8080'
    //    初始化请求
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
                })
                $('.swiper-wrapper').html(html);
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true, // 循环模式选项
                })
            }
        });
        initPageAjax(1)
    }
    initAjax()

    function initPageAjax(page, term) {
        //筛选列表
        $.ajax({
            url: a + `/studytour/services/page/${page}/10`,
            dataType: 'json',
            type: 'post',
            data: term,
            success: function (result) {
                console.log(result.resultData.content)
                var arr = result.resultData.content;
                let html = template("filterList", {
                    data: arr
                })
                $("#xiangqing").html(html);
                // 分页器
                if (result.resultData.totalPages > 0) {
                    const slp = new SimplePagination(result.resultData.totalPages);
                    slp.init({
                        container: '#xiangqing-02',
                        maxShowBtnCount: 3,
                        onPageChange: state => {
                            listAjax(state.pageNumber)
                        }
                    })
                } else {
                    $("#xiangqing-02").children().remove()
                }
            }
        })
    }
    function listAjax(page, term) {
        console.log(page,'当前页')
        //筛选列表
        $.ajax({
            url: a + `/studytour/services/page/${page}/10`,
            dataType: 'json',
            type: 'post',
            data: term,
            success: function(result) {
                var arr = result.resultData.content;
                let html = template("filterList", {
                    data: arr
                })
                $("#xiangqing").html(html);
            }
        })
    }

    //国家接口
    $.ajax({
        url: a + '/studytour/services/country?category=JPXL',
        dataType: 'json',
        type: 'get',
        success: function (result) {
            var arr = result.resultData;
            let html = template("countryType", {
                date: arr
            })
            $('#p1').html(html)
            console.log(arr,'精品游学出行国家')
        }
    })

    //出行天数接口
    $.ajax({
        url: a + '/studytour/services/dict/cxts',
        dataType: 'json',
        type: 'get',
        success: function (result) {
            var arr = result.resultData
            let html = template("dataType", {
                date: arr
            })
            $('#p4').html(html)
            console.log(arr,'天数数据')
        }
    })
    //适应年龄接口
    $.ajax({
        url: a + '/studytour/services/dict/njfl',
        dataType: 'json',
        type: 'get',
        success: function (result) {
            var arr = result.resultData
            let html = template("ageType", {
                date: arr
            })
            $('#p5').html(html)
        }
    })
    //游学主题接口
    $.ajax({
        url: a + '/studytour/services/dict/yxzt',
        dataType: 'json',
        type: 'get',
        success: function (result) {
            var arr = result.resultData
            let html = template("cateType", {
                date: arr
            })
            $('#p6').html(html)
        }
    })
    // banner交互
    $.ajax({
        url: a + '/studytour/services/page/1/7',
        dataType: 'json',
        type: 'post',
        data: {
            category: ''
        },
        success: function (result) {
            var arr = result.resultData.content
            // console.log(arr)
        }
    })
    function getUrl(name) {
        //获取url方法 编辑传来的参数
        //     //之前decodeURI是用的unescape() 有时候会取汉字乱码
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
}