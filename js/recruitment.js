
// 招聘信息
let recruitmsghtml = ''
function getrecruit(){
    $.ajax({
        url: baseurl + "/api/recruit/query",
        type: "GET",
        success: function(data) {
            console.log(data)
            if(data.code==0){
                data.data.forEach(val=>{
                    recruitmsghtml +=`<div class="msgcard">
                    <div class="companyname">
                      公司名称：${val.companyName}
                    </div>
                    <div  class="companyadress">
                      公司地址：${val.address}
                    </div>
                    <div  class="companyadress">
                      工作内容：${val.work}
                    </div>
                    <div  class="companyadress">
                      学历要求：${val.requirement}
                    </div>
                    <div  class="companyadress">
                      薪资结构：${val.welfare}
                    </div>
                    
                  </div>` 
                })
                $('.recruitmsg').append(recruitmsghtml)
            }
        }
    })
}

getrecruit()