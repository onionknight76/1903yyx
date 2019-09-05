$(function(){
    $(".denglu").click(function(){
        var uName = $(".zhanghao").val();
        var uPass = $(".mima").val();
       
        if(!uName){
            $(".jia").html("用户名不能为空！")
            return;
        }
        if(!uPass){
            $(".jia").html("密码不能为空！")
            return;
        }
        var cookieStr = $cookie.get("registors") ? $cookie.get("registors") : "";
        var cookieObj = method1(cookieStr);

        if(uName in cookieObj){
            if(uPass === cookieObj[uName]){
                $(".jia").html("登陆成功!");
                location.href="index.html";
               
            }else{
                $(".jia").html("密码不正确，请重新输入");
                
            }
        }else{
            $(".jia").html("用户名不存在");
           
        }

        function method1(str){
            if(!str){
                return {};
            }
            return JSON.parse(str);
        }
    })
})