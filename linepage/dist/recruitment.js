// 招聘信息
var recruitmsghtml = '';

function getrecruit() {
  $.ajax({
    url: baseurl + "/api/recruit/query",
    type: "GET",
    success: function success(data) {
      console.log(data);

      if (data.code == 0) {
        data.data.forEach(function (val) {
          recruitmsghtml += "<div class=\"msgcard\">\n                    <div class=\"companyname\">\n                      \u516C\u53F8\u540D\u79F0\uFF1A".concat(val.companyName, "\n                    </div>\n                    <div  class=\"companyadress\">\n                      \u516C\u53F8\u5730\u5740\uFF1A").concat(val.address, "\n                    </div>\n                    <div  class=\"companyadress\">\n                      \u5DE5\u4F5C\u5185\u5BB9\uFF1A").concat(val.work, "\n                    </div>\n                    <div  class=\"companyadress\">\n                      \u5B66\u5386\u8981\u6C42\uFF1A").concat(val.requirement, "\n                    </div>\n                    <div  class=\"companyadress\">\n                      \u85AA\u8D44\u7ED3\u6784\uFF1A").concat(val.welfare, "\n                    </div>\n                    \n                  </div>");
        });
        $('.recruitmsg').append(recruitmsghtml);
      }
    }
  });
}

getrecruit();
