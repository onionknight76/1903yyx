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
$(".btn").eq(0).css("background","#ffffff");
$("#banner").hover(function () {
    flag = false;

}, function () {
    flag = true;

})
//点击小圆点
$(".btn").click(function () {
    index = $(this).index();
    alert(index);
    $(".img-item").eq(index).fadeIn().siblings().fadeOut();
  
    $(".btn").eq(index).css("background","#FFFFFF").siblings().css("background", "#666666")
    alert(index);
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