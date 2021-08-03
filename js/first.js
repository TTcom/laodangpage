// 获取banner图片信息
import '../css/style.css'
function getbanner(){
    $.ajax({
        url: baseurl + "/api/recruit/query",
        type: "GET",
        success: function(data) {
            console.log(data)
        }
    })
}

getbanner()