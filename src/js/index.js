//左导航栏变色
$(function () {
    $(".left").hover(function () {
        $.each($(".left li"), function (index, value) {
            $(this).hover(function () {
                $(this).css("cursor", "pointer");
                $(".left li a").eq(index).css("color", "white")
                if (index === 10) {
                    $(".erweima").slideDown(300);
                }
            }, function () {
                $(".left li a").eq(index).css("color", "");
                $(".erweima").slideUp(300);
            })
        })
    })
})
$(function () {
    $(".show-wrap").each(function () {
        var oLi = $(this).find(".content-wrap");//需要排列的li
        var oHeight = oLi.height();//获取li的高度
        var oWidth = oLi.width();//获取li的宽度 
        // console.log(oWidth);
        // console.log(oHeight);
        var length = oLi.length;
        // console.log(length);
        var col = Math.ceil(length / 6); //列数向上取整(11/6 = 1余5向上取整为两列)
        // console.log(col);
        $(this).width(col * oWidth);

        oLi.each(function (index) {
            console.log(index);//index为每一个li
            //纵向排列
            var x = Math.floor(index / 6);//纵向排列 用下标除以6(第一列的下标只到5，除以6都为零点几，向下取整为0，所以第一列的left都为0，第二列的下标从6开始除以6向下取整为1，所以第二列的left都为1(乘以自身的宽就为自身的left坐标),依次类推)
            var y = index % 6;//下标模每列的的总数(小于6就返回当前下标，第几个就乘以几个自身的高，就为自身y轴的坐标)
            $(this).css({
                left: x * oWidth + "px",
                top: y * oHeight + "px"
            })
        })
    })
})
//右导航栏变色
$(function () {
    $.each($(".right li"), function (index, value) {
        $(value).hover(function () {
            $(".right li a").eq(index).css("color", "white");
        }, function () {
            $(".right li a").eq(index).css("color", "");
        })
    })
})
$(function () {
    $(".right li a").eq(0).click(function () {
        location.href = "login.html";
    })
    $(".right li a").eq(1).click(function () {
        location.href = "register.html";
    })
})
//购物车显示
$(function () {
    $(".shop-Car").hover(function () {
        $(".shop-Car").css("background", "white");
        $(".gouwuche").slideDown(300);
        //阴影
        $(".gouwuche").css("box-shadow", "0 3px 3px 3px rgba(0,0,0,0.1)");
    }, function () {
        $(".gouwuche").slideUp(300);
        $(".shop-Car").css("background", "");
    })

})
//第二个导航栏变色
$(function () {
    $.each($(".zhong-header ul li a"), function (index, value) {
        $(value).hover(function (index, value) {
            $(this).css("color", "red");
            $(".hide").show();
        }, function () {
            $(this).css("color", "");
            $(".hide").hide();
        })
    })
})

//轮播图
var index = 0;
var flag = true;
$(".btn").eq(0).css("background", "#ffffff");
$("#banner").hover(function () {
    flag = false;

}, function () {
    flag = true;

})
//点击小圆点
$(".btn").click(function () {
    index = $(this).index();
    //alert(index);
    $(".img-item").eq(index).fadeIn().siblings().fadeOut();

    $(".btn").eq(index).css("background", "#FFFFFF").siblings().css("background", "#666666")
    //alert(index);
})
//点击右按钮
$(".right").click(function () {
    index++;

    if (index > 4) {
        index = 0;
    }
    $(".img-item").eq(index).fadeIn().siblings().fadeOut();
    $(".btn").eq(index).css("background", "#ffffff").siblings().css("background", "#666666")

})
//点击左按钮
$(".left").click(function () {
    index--;
    if (index < 0) {
        index = 4;
    }
    $(".img-item").eq(index).fadeIn().siblings().fadeOut();
    $(".btn").eq(index).css("background", "#ffffff").siblings().css("background", "#666666")
})
//移入停止自动轮播
$(function () {
    var timer = null;
    timer = setInterval(function () {
        if (flag) {
            index++;
            if (index === 4) {
                index = 0;
            }
            $(".img-item").eq(index).fadeIn().siblings().fadeOut();
            $(".btn").eq(index).css("background", "#ffffff").siblings().css("background", "#666666")
        }
    }, 3000)
})

var b = 1;


$(function () {
    $(".flag-left").click(function () {
        //alert("我太难啦");
        var a = -980;
        if (b > 2) {
            b = 1;
            return;
        }
        console.log($(".neirong2-second ul"));
        c = a * b;
        $(".neirong2-second ul").animate({ left: a * b }, 300);
        b++;

    })
    $(".flag-right").click(function () {
        var a = 0;
        $(".neirong2-second ul").animate({ left: a }, 300);
        a = 980;
    })
})

$(function () {
    setInterval(function () {
        var myDate = new Date(); //实例一个时间对象；
        // myDate.getFullYear();   //获取系统的年；
        // myDate.getMonth() + 1;   //获取系统月份，由于月份是从0开始计算，所以要加1
        // myDate.getDate(); // 获取系统日，
        var hour = myDate.getHours(); //获取系统时，
        var minute = myDate.getMinutes(); //分
        var second = myDate.getSeconds(); //秒
        $(".time span").eq(0).html(hour);
        $(".time span").eq(1).html(minute);
        $(".time span").eq(2).html(second);
    }, 1000)
})