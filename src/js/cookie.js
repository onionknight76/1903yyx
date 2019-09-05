//创建cookie

//获取cookie

//删除cookie

var $cookie = {
    create: function(key, value, expires) {
        var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
        if (!isNaN(expires)) {
            var date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText += ';expires=' + date;
        }
        document.cookie = cookieText;
    },
    get: function(key) {
        // console.log("hahha");
       console.log(document.cookie);
        var arr = document.cookie.split('; ');
        for (var i = 0, len = arr.length; i < len; i++) {
            var list = arr[i].split('=');
            if (list[0] === encodeURIComponent(key)) {
                return decodeURIComponent(list[1]);
            }
        }
    },
    remove: function(key) {
        document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(0);
    }
}