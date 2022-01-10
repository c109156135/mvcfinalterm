import { Request } from "../Request.js";
import { planeshow } from "./planeshow.js";
function addplane(){
    let data = {
        "Flight_id" : $(".selector").val(),
        "Plane_status" : $(".selector2").val(),
        "Plane_name":$("#Plane_Name").val()
    };
    console.log(data);
    Request().post("/public/index.php?action=newPlane",Qs.stringify(data))
    .then(function (resp){
        console.log(resp['data']);
        planeshow();
    })
    .catch(err => {
        console.error(err); 
    })
}
export {addplane}