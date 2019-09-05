$(function(){
   $(".zhuce").click(function(){
        var uName = $(".in-1").val();
        var uPassword = $(".in-2").val();
    
        if(!uName){
            $(".tishi").html("用户名不能为空");
            return;
        }

        if(!uPassword){
            $(".tishi").html("密码不能为空");
            return;
        }
        
       var cookieStr = $cookie.get("registors") ? $cookie.get("registors") :"";
       var cookieObj = mehtod1(cookieStr);

       if(uName in cookieObj){
        $(".tishi").html("用户名已存在");
           return;
       }else{
           cookieObj[uName] = uPassword;
       }
       $cookie.create("registors",JSON.stringify(cookieObj),8);
      // $(".tishi").html("注册成功");
      alert("恭喜您注册成功！");
       location.href = "login.html";
       function mehtod1(str){
           if(!str){
               return{};
           }
           return JSON.parse(str);
       }
   }) 
})
