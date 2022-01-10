import { Request } from "../Request.js";
import { flightshow } from "./flightshow.js";
function addflight(){
    let data = {
        "workday" : $(".selector").val(),
        "Takeoff_Place":$("#Takeoff_place").val(),
        "Arrived_place":$("#Arrived_place").val(),
        "Takeoff_time":$("#Takeoff_time").val(),
        "Arrived_time":$("#Arrived_time").val() 
    };
    console.log(data);
    Request().post("/public/index.php?action=newflight",Qs.stringify(data))
    .then(function (resp){
        console.log(resp['data']['result']);
        flightshow();
        
    })
    .catch(err => {
        console.error(err); 
    })
}
export {addflight}