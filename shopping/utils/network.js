//得到小程序的上下文环境
const app = getApp()
//web接口的基地址
var baseUrl = "http://localhost:8080/shopping/"

//request请求函数
function request(method, requestHandler) {
    return new Promise((resolve, reject) => {
        //例如：http://localhost:8080/shopping/apprise/findAllApprise?shopId=1
        //params就是shopId=1
        //url就是apprise/findAllApprise
        var mydata = requestHandler.data
        var myurl = baseUrl + requestHandler.url
        console.log('==>查看提交web服务器的数据:url=' + myurl + ", data=" + mydata)
        wx.request({
                url: myurl,
                data: mydata,
                method: method,
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                success(res) {
                    if (res.data.msg == 'success') {
                        console.log('==>成功返回数据:url=' +myurl +",data=" + res.data );
                        resolve(res.data)
                    }else{
                        console.log('==>失败返回数据:url=' +myurl +",data=" + res.data );
                        // requestHandler.fail(res.data);
                        reject(res.data)
                    }
                },
                fail(res) {
                    reject(res)
                }
            }
        )
    })
}

//处理GET请求
function GET(requestHandler) {
    //生产一个匿名的Promise对象
    //把异步操作巧妙地改成同步操作
    return new Promise((resolve, reject) => {
        request("GET",requestHandler).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
//处理POST请求
function POST(requestHandler) {
    //生产一个匿名的Promise对象
    //把异步操作巧妙地改成同步操作
    return new Promise((resolve, reject) => {
        request("POST",requestHandler).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
// 新增module.exports属性，将GET和POST方法暴露给其他js
// 其他js可以通过get和post来调用GET和POST方法
module.exports = {
    get: GET,
    post: POST
}



