
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".t_ser_b{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n.t_ser_b :nth-child(3n+0){\r\n    margin-right: 0;\r\n}\r\n.enterprisecard{\r\n    min-height: 140px;\r\n    min-width: 200px;\r\n    background: #f8f8f8;\r\n    margin-right:36px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 40px 35px;\r\n}\r\n.enterprisecard img{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.t_ser_b .entertext{\r\n    max-width: 329px;\r\n    font-size: 14px;\r\n    color: #666;\r\n    line-height: 1.6;\r\n    padding-top: 20px;\r\n}\r\n.t_ser_b .maintitle{\r\n    font-size: 22px;\r\n    color: #333333;\r\n    line-height: 1.6;\r\n    padding-top: 20px;\r\n}";
styleInject(css_248z);
