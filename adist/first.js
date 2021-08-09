
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import './style-b93f13a5.js';

// 获取banner图片信息
function getbanner(){
    $.ajax({
        url: baseurl + "/api/recruit/query",
        type: "GET",
        success: function(data) {
            console.log(data);
        }
    });
}

getbanner();
