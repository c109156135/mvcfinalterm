import { Request } from "./Request.js";
function loginpage() {
    const sp=`
    帳號:<input type="text" id="id"><br>
    密碼:<input type="password" id="password"><br>
    <button id="login">登入</button>
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
            if (window.localStorage) {
                console.log(response['token'])
                window.localStorage.setItem("jwtToken",response['token']);
            }
            window.location.reload();
        })
        .catch(err => {
            console.error(err); 
        })
        
    });;
}
export {loginpage}