import { showregisterpage } from "./register.js";
import { Request } from "./Request.js";
function loginpage() {
    const sp=`
    請輸入身份證字號:<input type="text" id="id"><br>
    密碼:<input type="password" id="password"><br>
    <button id="login">登入</button>
    <button id="register">註冊</button>
    <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#login").click(function (e) { 
        const data={
            "id":$("#id").val(),
            "password":$("#password").val(),
        };
        Request().post('./public/index.php?action=doLogin',Qs.stringify(data))
        .then(function (resp){
            let response = resp['data'];
            console.log(response);
            if (response['result'].length > 0) {
                if (window.localStorage) {
                    console.log(response['token']);
                    window.localStorage.setItem("id",$("#id").val());
                    window.localStorage.setItem("jwtToken",response['token']);
                    window.location.reload();
                }
            }
            let str = `無此顧客資訊`;
            $("#content").html(str);
        })
        
        .catch(err => {
            console.error(err); 
        })
        
    });;
    $("#register").click(function (e) {
        const data={
            "id":$("#id").val(),
            "password":$("#password").val(),
        };
        Request().post('./public/index.php?action=doLogin',Qs.stringify(data))
        .then(function (resp){
            let response = resp['data'];
            console.log(response);
            const token = response['token'];
            console.log(token);
            showregisterpage(token);
        })
        .catch(err => {
            console.error(err); 
        })
    });
}
export {loginpage}