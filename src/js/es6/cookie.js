//创建cookie

//获取cookie

//删除cookie

let $cookie = {
    create: function(key, value, expires) {
        let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
        if (!isNaN(expires)) {
            let date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText += ';expires=' + date;
        }
        document.cookie = cookieText;
    },
    get: function(key) {
        let arr = document.cookie.split('; ');
        for (let i = 0, len = arr.length; i < len; i++) {
            let list = arr[i].split('=');
            if (list[0] === encodeURIComponent(key)) {
                return decodeURIComponent(list[1]);
            }
        }
    },
    remove: function(key) {
        document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(0);
    }
}