
function navv(){
	//顶部吸盘导航
	var navHeight= $("#navHeight").offset().top;
	var navFix=$("#nav_wrap");
	$(window).scroll(function(){
		if($(this).scrollTop()>navHeight){
			navFix.addClass("navFix");
		}
		else{
			navFix.removeClass("navFix");
		}
	})
	 //滚动条样式
	 $('#content,.content2').niceScroll({
		cursorcolor: "#d6d6d6",// 光标颜色
		cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
		touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
		cursorwidth: "5px", //像素光标的宽度
		cursorborder: "0", // 	游标边框css定义
		cursorborderradius: "10px",//以像素为光标边界半径
		autohidemode: false //是否隐藏滚动条
	});
	//每天切换
	scroll({
		element: '.details-dayleft',
		container: '.details-dayright'
	});
}
function scroll(options) {
    var defaults = {
        element: '.details-dayleft',
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
