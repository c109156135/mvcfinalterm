import { Request } from "../Request.js";
import { showupdateplaneseat } from "./showupdateplaneseat.js";

function goupdateseatstatus(Plane_id,seat_id,seat_status) {
    console.log(Plane_id,seat_id,seat_status);
    console.log(seat_status);
    let data = {
        "Plane_id" : Plane_id,
        "seat_id" : seat_id,
        "seat_status" : seat_status
    };
    Request().post("/public/index.php?action=updatePlaneseatstatus",Qs.stringify(data))
    .then(function (resp){
        console.log(resp['data'])
        showupdateplaneseat(Plane_id);
    })
    .catch(err => {
        console.error(err); 
    })
}
export {goupdateseatstatus}