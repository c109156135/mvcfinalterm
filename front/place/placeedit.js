import { Request } from "../Request.js";
import { placeshow } from "./placeshow.js";
function placeedit() {
    let data = {
        "Place_id":parseInt($("#Place_id").val()),
        "Place_Name":$("#Place_Name").val(),
        "Place_Status":$(".selector").val()
    };
    console.log(data);
    Request().post("/public/index.php?action=updatePlace",Qs.stringify(data))
    .then(function(resp){
        console.log(resp['data']);
        placeshow();
    })
    .catch(err => {
        console.error(err); 
    })
    
}
export {placeedit}