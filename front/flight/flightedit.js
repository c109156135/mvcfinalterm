import { Request } from "../Request.js";
import { flightshow } from "./flightshow.js";
function flightedit() {
    let data = {
        "Flight_id":parseInt($("#Flight_id").val()),
        "workday":$("#workday").val(),
        "Takeoff_place":$("#Takeoff_place").val(),
        "Arrived_place":$("#Arrived_place").val(),
        "Takeoff_time":$("#Takeoff_time").val(),
        "Arrived_time":$("#Arrived_time").val()
    };
    Request().post("/public/index.php?action=updateFlights",Qs.stringify(data))
    .then(function(resp){
        console.log(resp['data']);
        flightshow();
    })
    .catch(err => {
        console.error(err); 
    })
    
}
export {flightedit}