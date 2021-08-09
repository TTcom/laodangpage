
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
// 获取新闻
function getnews(){
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
