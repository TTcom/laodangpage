$(function () {
  let headerhtml = `<div class="t_head c">
  <div class="t_head_a">
    <div class="t_head_top">
      <div class="t_head_t_l">欢迎进入郑州第一人力资源服务股份有限公司官方网站！</div>
      <div class="t_head_t_r"></div>
    </div>
  </div>
  <div class="t_head_b">
    <div class="t_head_nav">
      <div class="c_nav c">
        <div class="box_c c">
          <div class="c_nav_logo"> <a href="index.html"><img src="./src/images/logo.png" alt="郑州第一人力资源有限公司"></a> </div>
          <div class="c_nav_nav">
            <div class="c_nav_nav_ul">
              <ul>
                <li class="c_nav_nav_li1"> <a href="index.html">
                  <div class="c_nav_nav_li_a c c_nav_nav_li_a_hover">网站首页</div>
                  </a> </li>
                <li class="c_nav_nav_li1"> <a href="about.html">
                  <div class="c_nav_nav_li_a c ">关于我们</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                      <li class="c_nav_nav_li2"> <a href="corporatCulture.html">
                        <div class="c_nav_nav_li2_b c">企业文化<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="developmentHistory.html">
                        <div class="c_nav_nav_li2_b c">发展历程<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                    </ul>
                  </div>
                </li><li class="c_nav_nav_li1"> <a href="enterpriseService.html">
                  <div class="c_nav_nav_li_a c ">企业服务</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                      <li class="c_nav_nav_li2"> <a href="globalDispatch.html">
                        <div class="c_nav_nav_li2_b c">全球化派遣<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">业务外包<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">社保代理<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">薪酬福利管理<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">劳务派遣及人事委托<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">招聘服务<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                    </ul>
                  </div>
                </li><li class="c_nav_nav_li1"> <a href="news.html">
                  <div class="c_nav_nav_li_a c ">新闻动态</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">公司动态<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                      <li class="c_nav_nav_li2"> <a href="">
                        <div class="c_nav_nav_li2_b c">行业动态<i class="c_nav_nav_li2_b_i">></i></div>
                        </a> </li>
                      
                    </ul>
                  </div>
                </li><li class="c_nav_nav_li1"> <a href="partner.html">
                  <div class="c_nav_nav_li_a c ">合作伙伴</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                    </ul>
                  </div>
                </li><li class="c_nav_nav_li1"> <a href="recruitment.html">
                  <div class="c_nav_nav_li_a c ">招聘信息</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                    </ul>
                  </div>
                </li><li class="c_nav_nav_li1"> <a href="contact.html">
                  <div class="c_nav_nav_li_a c ">联系我们</div>
                  </a>
                  <div class="c_nav_nav_li_b c">
                    <ul>
                      
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="c_nav_nav_div"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
let footerhtml = `<div class="s_footer c">
<div class="s_footerz c">
  <div class="s_fb_l">
    <div class="s_fb_l01">联系我们</div>
    <div class="s_fb_l02">
      <div class="s_fb_l02_l"><img src="./src/images/ico-30.png"/></div>
      <div class="s_fb_l02_c">地址：河南省开封市祥符区</div>
    </div>
    <div class="s_fb_l02">
      <div class="s_fb_l02_l"><img src="./src/images/ico-30.png"/></div>
      <div class="s_fb_l02_c">电话：0371-88888888</div>
    </div>
    <div class="s_fb_l02">
      <div class="s_fb_l02_l"><img src="./src/images/ico-30.png"/></div>
      <div class="s_fb_l02_c">手机：XXX</div>
    </div>
    <div class="s_fb_l02">
      <div class="s_fb_l02_l"><img src="./src/images/ico-30.png"/></div>
      <div class="s_fb_l02_c">邮箱：<a class="__yjs_email__" href="/cdn-cgi/l/email-protection" data-yjsemail="6302070e0a0d230406190b020d000d4d000c0e">[email&#160;protected]</a><script data-yjshash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script></div>
    </div>
  </div>
  <div class="s_fb_c">
    <div class="s_fb_c01">关于我们</div>
    <div class="s_fb_c02">
      <ul>
        
        <li><a href="corporatCulture.html">企业文化</a></li>
        
        <li><a href="developmentHistory.html">发展历程</a></li>
        
      </ul>
    </div>
  </div><div class="s_fb_c">
    <div class="s_fb_c01">新闻动态</div>
    <div class="s_fb_c02">
      <ul>
        
        <li><a href="">公司动态</a></li>
        
        <li><a href="">行业动态</a></li>
        
      </ul>
    </div>
  </div><div class="s_fb_c">
    <div class="s_fb_c01">联系我们</div>
    <div class="s_fb_c02">
      <ul>
        
      </ul>
    </div>
  </div>
  <div class="s_hdpt">
    <div class="s_hdpt01">互动平台</div>
    <div class="s_fbma">
      <div class="s_fbma_l">
        <div class="s_fbma_l01">扫描关注微信号</div>
        <div class="s_fbma_l02">GNLASER</div>
      </div>
      <div class="s_fbma_r"><img src="./src/images/erweima.jpg" width="100" height="100"/></div>
    </div>
    <!--<div class="s_fbma" style="padding-top: 20px; border-bottom: none;">
      <div class="s_fbma_l">
        <div class="s_fbma_l01">扫描浏览手机网站</div>
        <div class="s_fbma_l02">GNLASER</div>
      </div>
      <div class="s_fbma_r"><img src="./src/images/erweima.jpg"/></div>
    </div>--> 
  </div>
</div>
</div>
<div class="s_footer_b">
<div class="s_footer_b01">
  <div class="s_ftb_l">Copyright &copy; 2002-2020 郑州第一人力资源有限公司 版权所有 网站备案号：<a href="http://www.beian.miit.gov.cn/" target="_blank">豫ICP备xxxxxxxx号</a></div>
   
</div>
</div>`
   $('body').prepend(headerhtml)
   $('body').append(footerhtml)
   $('body').show()
})
