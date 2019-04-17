window.onload = function () {

    $('.tab-span1').on('click', function () {

        $('.tab-span1').css({

            'borderLeft': '0',

            'backgroundColor': 'rgba(255, 255, 255, 1)'

        });

        $('.show').css({

            'display': 'none'

        });

        $(this).css({

            'borderLeft': '3px solid rgba(0, 116, 209, 1)',

            'backgroundColor': 'rgba(228, 246, 255, 1)'

        });

        // eq索引

        $(' .show').eq($(this).index()).css({

            'display': 'block'

        });

    });



    // 个人收藏动效

    $(".personalList").mouseenter(function () {

        $(this)[0].children[0].style.color = "#42A4D3";

        $(this)[0].children[1].src = "./images/deletTwo.png";

    })



    $(".personalList").mouseleave(function () {

        $(this)[0].children[0].style.color = "#101010";

        $(this)[0].children[1].src = "./images/delet.png";

    })



    // 两级联动  --------开始-------------------

    var arr_province = ["请选择类别", "北京市", "上海市", "天津市", "重庆市", "深圳市", "广东省"];

    var arr_city = [

        ["请选择子类"],

        ["东城区", "西城区", "朝阳区", "宣武区", "昌平区", "大兴区", "丰台区", "海淀区"],

        ['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'],

        ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'],

        ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'],

        ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'],

        ['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市']

    ];

    //网页加载完成，初始化菜单

    function init() {

        //首先获取对象

        var province = document.querySelector("#province");

        var city = document.querySelector("#city");

        //指定省份中<option>标记的个数

        province.length = arr_province.length;

        //循环将数组中的数据写入<option>标记中

        for (var i = 0; i < arr_province.length; i++) {

            province.options[i].text = arr_province[i];

            province.options[i].value = arr_province[i];

        }

        //修改省份列表的默认选择项

        var index = 0;

        province.selectedIndex = index;

        //指定城市中<option>标记的个数

        city.length = arr_city[index].length;

        //循环将数组中的数据写入<option>标记中

        for (var j = 0; j < arr_city[index].length; j++) {

            city.options[j].text = arr_city[index][j];

            city.options[j].value = arr_city[index][j];

        }

    }

    init(); //传入函数地址



    // $("#province").change()

    $("#province")[0].onchange = function () {

        //选择对象

        var city = document.querySelector("#city");

        //修改省份列表的选择项

        province.selectedIndex = this.selectedIndex;

        //指定城市中<option>标记的个数

        city.length = arr_city[this.selectedIndex].length;

        //循环将数组中的数据写入<option>标记中

        for (var j = 0; j < arr_city[this.selectedIndex].length; j++) {

            city.options[j].text = arr_city[this.selectedIndex][j];

            city.options[j].value = arr_city[this.selectedIndex][j];

        }

    }

    //------------结束-------------



    // 合作产品动效

    function expand() {

        let flag = 0;

        $(".contentDl").click(function () {

            let index = $(this).next().children().length;

            if (flag % 2 == 0) {

                $(".contentDl").children().children().filter(".indication").css({

                    transform: "rotateZ(0deg)",

                    transition: "all .3s ease-in"

                });

                $(".contentDl").next().css({

                    "height": 0,

                    transition: "all .3s ease-in"

                })

                $(this).children().children().filter(".indication").css({

                    transform: "rotateZ(90deg)",

                    transition: "all .3s ease-in"

                });

                $(this).next().css({

                    "height": index * 60,

                    transition: "all .3s ease-in"

                })

            } else {

                $(".contentDl").children().children().filter(".indication").css({

                    transform: "rotateZ(0deg)",

                    transition: "all .3s ease-in"

                });

                $(".contentDl").next().css({

                    "height": 0,

                    transition: "all .3s ease-in"

                })

            }

            flag++;

        })



    }

    expand()

    $(".file-item").mouseenter(function () {

        $(this).css({

            backgroundColor: "#f4f4f4",

        })

        $(this).children().filter("button").css({

            backgroundColor: "#42A4D3",

            color: "#fff"

        })

    })

    $(".file-item").mouseleave(function () {

        $(this).css({

            backgroundColor: "#fff",

        })

        $(this).children().filter("button").css({

            backgroundColor: "#fff",

            color: "#42A4D3"

        })

    })

    // 合作资料动效

    $(".data-item").hover(function () {

        $(this)[0].style.cssText = "background-color:#F9F9F9";

        $(this)[0].children[1].style.cssText = "background-color:#42A4D3;color:#fff";

    });

    $(".data-item").mouseleave(function () {

        $(".data-item").css({

            backgroundColor: "#fff"

        });

        $(".data-item").children().filter("button").css({

            backgroundColor: "#FFF",

            color: "#42A4D3",

        });

    })



    function operat() {

        let index = 0;

        $(".rightTitle").click(function () {

            let ulHeight = $(this).next().children().length * 60;

            if (index % 2 == 0) {

                $(".rightTitle").next().css({

                    "height": 0,

                    transition: "all .5s ease-in",

                });

                $(".rightTitle").children().filter(".arrow").css({

                    transform: "rotateZ(0deg)",

                    transition: "all .5s ease-in",

                })

                $(this).children()[1].style.cssText = "transform:rotateZ(90deg);transition:all .5s ease-in";

                $(this).next().css({

                    "height": ulHeight,

                    transition: "all .5s ease-in",

                })

            } else {

                $(".rightTitle").next().css({

                    "height": 0,

                    transition: "all .5s ease-in",

                })

                $(".rightTitle").children().filter(".arrow").css({

                    transform: "rotateZ(0deg)",

                    transition: "all .5s ease-in",

                })

            }

            index++

        });



    }

    operat();



    function deploy(dom) {

        $(".popup").css({

            display: "block",

            opacity: 1,

        });

        $(dom).css({

            display: "flex",

            opacity: 1,

        })

    }

    // 个人信息修改设置

    $(".setPass").click(function () {

        deploy(".changeThree")

    })

    $(".changePass").click(function () {

        deploy(".changeFour");

    })

    $(".setEmail").click(function () {

        deploy(".changeOne")

    })

    $(".changeEmail").click(function () {

        $(".changeTwo p").text("旧邮箱：" + $(".myEmail").text())

        deploy(".changeTwo")

    })

    $(".setCode").click(function () {

        deploy(".changeSix")

    })

    $(".changeCode").click(function () {

        $(".bankNameSet").text($(".personalBankName").text());

        $(".codeSet").text($(".personalCode").text())

        deploy(".changeSeven")

    })

    $(".setName").click(function () {

        deploy(".changeFive")

    })



    function displayNone() {

        $(".popup").css({

            display: "none",

            opacity: 0,

        });

        $(".changed").css({

            display: "none",

            opacity: 0,

        })

    }

    $(".popup").click(displayNone)

    $(".changed>span").click(displayNone);

}