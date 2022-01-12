import { Request } from "../Request.js";
function gosetinvalid(plane_id,seat_id,Tickets_detail_id) {
    console.log(plane_id,seat_id,Tickets_detail_id);
    let data1 = {
        "Tickets_detail_id" : Tickets_detail_id,
        "valid" : "false"
    };
    let data2 = {
        "Plane_id" : plane_id,
        "seat_id" : seat_id,
        "seat_status" : "booked" //將booked丟入後端時會自己轉成empty
    };
    axios.all([
        Request().post("/public/index.php?action=updateTicketsvalid",Qs.stringify(data1)), //將detail座位設invalid
        Request().post("/public/index.php?action=updatePlaneseatstatus",Qs.stringify(data2)) //將database的訂位取消
        ])
    .then(axios.spread((res1, res2)=>{
        console.log(res1['data']);
        console.log(res2['data']);
    }))
}
export {gosetinvalid}