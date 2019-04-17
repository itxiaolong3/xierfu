window.onload = function () {
    const a = 'http://47.107.191.81:8080';

    function initAjax() {
        // banner交互
        $.ajax({
            url: a + '/studytour/services/banners',
            dataType: 'json',
            type: 'get',
            success: function (result) {
                var arr = result.resultData
                let html = template("banner", {
                    data: arr
                });
                $(".swiper-wrapper").html(html);
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            }
        })
        $.ajax({
            url: a + '/studytour/service/page/1/10',
            dataType: 'jsonp',
            type: 'get',
            success: function (result) {
                console.log(result);
            }
        })
    }
    initAjax()
}