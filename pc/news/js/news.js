$('.remen span').on('click', function() {

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

$('.jingdian span').on('click', function() {

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
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
    $('.jingdian .show').eq($(this).index()).css({
        'display': 'block'
    });
});
/* $(function() {
    var $ali = $(".nav1>li");

    for (var i = 0; i < $ali.length; i++) {
        $ali.eq(i).click(function() {
            let ulHeight = $(this).children().children().length * 48;
            if ($(this).find("ul").height() == 0) {
                $(this).find("ul").css({
                    height: ulHeight
                })
                $(this).find("span").css({
                    transform: "rotateZ(90deg)"
                });
                $(this).siblings("li").find("ul").css({
                    height:0
                });
                $(this).siblings("li").find("span").css({
                    transform: "rotateZ(0deg)"
                })
            } else {
                $(this).find("ul").css({
                    height: 0,
                })
                $(this).find("span").css({
                    transform: "rotateZ(0deg)"
                })
            }

        })
    }
}) */

var a = 'http://47.107.191.81:8080'
var ismore=true;
var defaulepage=1
var cateid=82
$(function() {
    // banner交互
    $.ajax({
        url: a + '/news/services/banner',
        dataType: 'json',
        type: 'get',
        success: function(result) {
            console.log(result.resultData)
            var arr = result.resultData
            var html = "";
            var s1 = arr[0].filePath;
            var s2 = arr[0].id;

            html += '<img id="' + s2 + '" src="' + a + s1 + '" >'

            $('#banner').html(html)
        }
    })
})


$(function() {
    // 左边新闻中心交互
    $.ajax({
        url: a + '/news/services/category',
        dataType: 'json',
        type: 'get',
        success: function(result) {
            // console.log(result.resultData)
            var arr = result.resultData
            var html = "";
            $.each(arr, function(index, item) {
                var s1 = arr[index].name;
                var s2 = arr[index].id;
				if(arr[index].children){
					html += '<li id=' + s2 + ' onclick="lists('+s2+',1)" >' + s1 +'<span>&gt;</span><ul class="nav-list">';
					$.each(arr[index].children, function(index1, item1) {
						var a1 = item1.name;
						var a2 = item1.id;
						html += '<a id=' + a2 + ' onclick="lists('+a2+',1)" >' + a1 +'</a>';
					})
					html += '</ul>';
				}else{
					html += '<li id=' + s2 + ' onclick="lists('+s2+',1)" >' + s1;
				}
                html += '</li>'
            })
            $('#nav1').html(html);
			var $ali = $(".nav1>li");

			for (var i = 0; i < $ali.length; i++) {
				$ali.eq(i).click(function() {
				    console.log('点击')
                    ismore=true;
					let ulHeight = $(this).children().children().length * 48;
					if ($(this).find("ul").height() == 0) {
						$(this).find("ul").css({
							height: ulHeight
						})
						$(this).find("span").css({
							transform: "rotateZ(90deg)"
						});
						$(this).siblings("li").find("ul").css({
							height:0
						});
						$(this).siblings("li").find("span").css({
							transform: "rotateZ(0deg)"
						})
					} else {
						$(this).find("ul").css({
							height: 0,
						})
						$(this).find("span").css({
							transform: "rotateZ(0deg)"
						})
					}

				})
			}
        }
    })
})

function lists(categoryId,page){
    cateid=categoryId;
    defaulepage=page
	$.ajax({
        url: a + '/news/services/list/'+page+'/8',
        dataType: 'json',
        type: 'get',
		data: {'categoryId':categoryId},
        success: function(result) {
             console.log(result.resultData.content,'616351');
            var arr = result.resultData.content;
            var html = "";
            var imghtml="";
            var img6html="";
            var img7html="";
            $.each(arr, function(index, item) {
                //console.log(index,'索引')
                //前7条数据用于数据
                if (index<(5+((page-1)*20))){
                    console.log(item,'item')
                    if (arr[index].banners.length==0){
                        console.log(detailid,'Banner为0')
                        var bannerpath = '';
                    }else{
                        var bannerpath = arr[index].banners[0].filePath;
                    }

                    var detailid = arr[index].id;
                    var li5="";

                    if (index==(3+((page-1)*20))){
                        if (arr[index].banners.length==0){
                            console.log(detailid,'Banner长度0')
                        }else{
                            img6html+='<a href="./news-xiang.html?id='+arr[index].id +'"><img src="' + a +
                                bannerpath + '" id="' + detailid + '" width="230" height="130"></a>';
                        }
                    }else if(index==(4+((page-1)*20))){
                        if (arr[index].banners.length==0){
                            console.log(arr[index],'Bannerlenght为0')
                        }else{
                            img7html+='<a href="./news-xiang.html?id='+arr[index].id +'"><img src="' + a +
                                bannerpath + '" id="' + detailid + '" width="230" height="130" ></a>';
                        }

                    }else {
                        imghtml+='<li><a href="./news-xiang.html?id='+arr[index].id +'"><img src="' + a +
                            bannerpath + '" id="' + detailid + '" ></a></li>';
                    }

                }else{
                    var s1 = arr[index].banners;
                    var s2 = arr[index].title;
                    var s3 = arr[index].seoTitle
                    var s4;
                    var s5 = "";
                    $.each(s1, function(index1, item) {
                        s4 = s1[index1].filePath
                        // if(s4!=undefined){
                        s5 += '<li><a href="./news-xiang.html?id='+arr[index].id +'"><img src="' + a +
                            s4 + '" id="' + arr[index].id + '" ></a></li>'
                        // }
                    })
                    html += '<li id="' + arr[index].id + '">' +
                        '<h3><a href="./news-xiang.html?id=' + arr[index].id + '">' +
                        s2 + '</a></h3>' +
                        '<ul>' + s5 + '</ul>' +
                        '<p>' + s3 +
                        '<a href="#"><span class="span1">108</span></a> ' +
                        '<a href="#"><span class="span2">分享</span></a>' +
                        '</p>' +
                        '</li>'
                }
            })
            $('#ul04').html(html)
            $('#before5img').html(imghtml)
            $('#img6').html(img6html)
             $('#img7').html(img7html)
        }
    })
	
}
function listsmore(categoryId,page){
    ismore=false;
    defaulepage=page;
    console.log(categoryId,'更多中的类型')
    console.log(page,'更多中的页码')
    $.ajax({
        url: a + '/news/services/list/'+page+'/8',
        dataType: 'json',
        type: 'get',
        data: {'categoryId':categoryId},
        success: function(result) {
			console.log('有数据',result.resultData);
            var arr = result.resultData.content;
            var html='';
            if (result.resultData.content.length){
                
                $.each(arr, function(index, item) {
                    var s1 = arr[index].banners;
                    var s2 = arr[index].title;
                    var s3 = arr[index].seoTitle
                    var s4;
                    var s5 = "";
                    $.each(s1, function(index1, item) {
                        s4 = s1[index1].filePath
                        // if(s4!=undefined){
                        s5 += '<li><a href="./news-xiang.html?id='+arr[index].id +'"><img src="' + a +
                            s4 + '" id="' + arr[index].id + '" ></a></li>'
                        // }
                    })
                    html += '<li id="' + arr[index].id + '">' +
                        '<h3><a href="./news-xiang.html?id=' + arr[index].id + '">' +
                        s2 + '</a></h3>' +
                        '<ul>' + s5 + '</ul>' +
                        '<p>' + s3 +
                        '<a href="#"><span class="span1">108</span></a> ' +
                        '<a href="#"><span class="span2">分享</span></a>' +
                        '</p>' +
                        '</li>'

                })
                $('#ul04').append(html);
            }else{
                console.log('没数据')
            }
            console.log(result.resultData.content,'更多数据');
        }
    })
}
$(function() {
    // 中间新闻中心交互
    var cateid=GetQueryString('cateid')
    if (cateid){
        console.log(cateid,'得到的类别参数')
        lists(cateid,1);
    }else{
        lists('82',1);
    }

    $(window).on("resize scroll",function(){

        var windowHeight = $(window).height();//当前窗口的高度
        var scrollTop = $(window).scrollTop();//当前滚动条从上往下滚动的距离
        var docHeight = $(document).height(); //当前文档的高度
        //console.log(scrollTop, windowHeight, docHeight);
        //当 滚动条距底部的距离 + 滚动条滚动的距离 >= 文档的高度 - 窗口的高度
        //换句话说：（滚动条滚动的距离 + 窗口的高度 = 文档的高度）  这个是基本的公式
        if (scrollTop >= docHeight/4) {
            if (this.ismore){
                var newpage=this.defaulepage+1
                listsmore(this.cateid,newpage)
                console.log("===加载更多数据===");
            }

        }
    });
})

$(function() {
    // 右边新闻中心交互
    $.ajax({
        url: a + '/news/services/hotnews/1/4',
        dataType: 'json',
        type: 'get',
        success: function(result) {
            var arr = result.resultData.content
            var html = "";
            $.each(arr, function(index, item) {
                var s1 = arr[index].banners;
                var s3 = "";
                $.each(s1, function(index, item) {
                    s3 = s1[0].filePath
                         console.log(s1)
                })
                var s2 = arr[index].title;
                if (s3 != "") {
                    html += '<a class="item disBlock" href="news-xiang.html?id='+arr[index].id+'"><img src="' + a + s3 + '"><p>' + s2 + '</p></a>'
                }
            })
            $('#ul02').html(html)
        }
    })
})
//获取参数名
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}