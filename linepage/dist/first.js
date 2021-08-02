// 获取banner图片信息
function getbanner() {
  $.ajax({
    url: baseurl + "/api/recruit/query",
    type: "GET",
    success: function success(data) {
      console.log(data);
    }
  });
}

getbanner();
