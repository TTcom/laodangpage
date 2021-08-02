// 获取新闻
function getnews() {
  $.ajax({
    url: baseurl + "/api/news/query",
    type: "POST",
    dataType: "json",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify({
      type: 2
    }),
    success: function success(data) {
      console.log(data);
    }
  });
}

getnews();
