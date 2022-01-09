import { Request } from "../Request.js";
import { placeshow } from "./placeshow.js";
function addplace(){
    let data = {
        "Place_Status" : $(".selector").val(),
        "Place_Name":$("#Place_Name").val()
    };
    console.log(data);
    Request().post("/public/index.php?action=newPlace",Qs.stringify(data))
    .then(function (resp){
        console.log(resp)
        placeshow();
    })
    .catch(err => {
        console.error(err); 
    })
}
export {addplace}