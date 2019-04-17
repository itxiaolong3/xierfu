window.onload = function() {
    $("body").on("click", ".tab-span", function() {
        console.log(1111)
        $(this).siblings('.tab-span').removeClass('show1'); // 删除其他li的边框样式
        $(this).addClass('show1');
        $('.show').css({
            'display': 'none'
        });
        // eq索引
        $('.show').eq($(this).index()).css({
            'display': 'block'
        });
    })

    // 行程方案导航
    function clearStyle() {
        $(".xingcheng-nav .nav-item").children().filter(".item").css({
            backgroundColor: "#DFDFDF"
        });
    }

    //锚点跳转滑动效果
    $("body").on("click", "a[href*=#],area[href*=#]", function() {
        // alert(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    })

    // $(".xingcheng-nav .nav-item").click(function() {
    //     clearStyle();
    //     alert("45444");
    //     $(this).children()[0].style.cssText = "background-color:rgba(66, 164, 211, 1)";
    // })

    // $("body").on("click", ".xingcheng-nav .nav-item", function(e) {
    //     clearStyle()
    //     // $(this).children()[0].style.cssText = "background-color:rgba(66, 164, 211, 1)";
	// 	$(this).find(".item").css("background-color","rgba(66, 164, 211, 1)");
    //     $(this).siblings().find(".item").css("background-color","#dfdfdf");
    //     var index=$(this).index();
    //     // var $loutitop=$('.xingcheng-item').eq($(this).index()).offset().top;
    //
    //     var $loutitop=$('.xingcheng-item').eq($(this).index()).offset().top;
    //     //获取每个楼梯的offsetTop值
    //     alert($loutitop);
    //     // $('.xingcheng-item').animate({//$('html,body')兼容问题body属于chrome
    //     //     scrollTop:$loutitop
    //     // })
    // })
    //
    // $("body").on("click", ".xingcheng-nav .first", clearStyle)
    // $("body").on("click", ".xingcheng-nav .last", clearStyle)
    // $("body").on("click", ".xingcheng-nav li", function() {
    //     $(".tabChangeItem").css({
    //         display: "none",
    //     })
    //     if ($(".tabChangeItem")[$(this).index()]) {
    //         $(".tabChangeItem")[$(this).index()].style.display = "block";
    //     }
    // })
    scroll({
        element: '.xingcheng-tab-name',
        container: '#xingchengfangan .tabChange'
    });
    function scroll(options) {
        var defaults = {
            element: '.xingcheng-tab-name',
            container: window,
            active: 'active',
        }
        var activeTarget = null
        var options = $.extend({}, defaults, options)

        _bind();

        function _bind() {
            // 点击
            $(options.element).on('click', '[data-bind]', _handleClick)
            // 滚动监听
            $(options.container).on('scroll', _handleScroll)
        }
        // 设置选中状态
        function _setActive(target) {
            var active = options.active
            $(target).addClass(active).siblings().removeClass(active)
        }
        // 滚动到内容区域
        function _toContent(target) {
            var $container = $(options.container)
            var top = target[0].offsetTop
            $container.animate({ scrollTop: top }, 200, function () {
                activeTarget = null
            })
        }
        // 处理点击
        function _handleClick() {
            var $this = $(this)
            activeTarget = $this
            // 选中
            _setActive($this)
            // 滚动到指定区域
            var bindValue = $this.attr('data-bind')
            var target = $(options.container).find('[data-scroll=' + bindValue + ']')
            _toContent(target)
        }
        // 处理滚动
        function _handleScroll() {
            var scrollTop = this.scrollTop
            var scrollHeight = this.scrollHeight
            var maxScroll = scrollHeight - this.offsetHeight

            if (scrollTop >= maxScroll) {
                // 设置最后一个选中
                _setActive($(options.element).find('[data-bind]').last())
                return
            }
            if (activeTarget) {
                // 点击的时候
                return
            }
            $(this).find('[data-scroll]').each(function (index, item) {
                if (scrollTop >= this.offsetTop) {
                    var bindValue = $(this).attr('data-scroll')
                    var target = $('[data-bind=' + bindValue + ']')
                    _setActive(target)
                }
            })
        }
    }


    const a = 'http://47.107.191.81:8080'

    function initAjax() {
		var ids=[];
        var id = location.search;//? location.search.split("=")[1] : ''; //获取后面字符;
		ids = id.split("=");
		id = ids[1];
		//alert(id);
		$.ajax({
			url: a + "/studytour/services/detail/" + id,
			dataType: "json",
			type: "get",
			success: function(result) {
				console.log(result);
				let arr = result.resultData;
				console.log(arr);
				$.ajax({
					url: a + '/studytour/services/dict/njfl',
					dataType: 'json',
					type: 'get',
					async: false,
					success: function (res) {
						arr.gradelist = res.resultData;
					}
				});
				let html = template("contentss", { data: arr });
				$(".boxContainer").html(html)
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: true,
					loop: true, // 循环模式选项
					pagination: {
						el: '.swiper-pagination',
					},
					slideToClickedSlide: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						hideOnClick: true,
					  },
					on:{
						click: function(){
						 // alert('你点了Swiper');
						 $(".swiper-button-next").trigger("click");
						},
					  },
				});
				navv();
				$(".book-now-btn").bind("click",function(){
					layer.open({
					  type: 1,
					  shade: false,
					  title: false, //不显示标题
					  content: '<p style="color:#666;font-size:14px;line-height:35px;">请拨打电话：</p><p style="color:#666;font-size:14px;">400-8988-8891</p>', //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
					  cancel: function(){}
					});
				});
				jQuery(".picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50});
				
			}
		})
    }
	function youxue() {
		$.ajax({
			url: a + "/studytour/services/hot/page/1/5",
			dataType: "json",
			type: "get",
			success: function(result) {
				console.log(result);
				let arr = result.resultData;
				console.log(arr);
				let html = template("youxue", { data: arr });
				$(".youxue").html(html)
			}
		})
    }
    initAjax();
	youxue();
}
