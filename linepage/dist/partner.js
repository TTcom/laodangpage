// 获取panner信息
$.ajax({
  url: baseurl + "/api/banner/query",
  type: "POST",
  dataType: "json",
  contentType: "application/json;charset=utf-8",
  data: JSON({
    type: "partner"
  }),
  success: function success(data) {
    console.log(data);
  }
});
