import { loginpage } from "./loginpage.js";
import { startpage } from "./startpage.js";
import { Request } from "./Request.js";
$(document).ready(function () {
    if (window.localStorage) {
        Request().get("./public/index.php")
        .then(function(resp){
            const response = resp['data'];
            if (response == null) {
                loginpage();
                return;
            }
            if (response['status'] == 200) {
                window.localStorage.setItem("jwtToken",response['token']);            
                startpage();
            } else {
                loginpage();
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }
});
