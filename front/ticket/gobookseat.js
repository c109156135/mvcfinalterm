import { Request } from "../Request.js";

function gobookseat(Plane_id,seat_id,seat_status,level) {
    console.log(Plane_id,seat_id,seat_status);
    console.log(seat_status);
    let data1 = {
        "Plane_id" : Plane_id,
        "seat_id" : seat_id,
        "seat_status" : seat_status
    };
    let data2 = {
        "Plane_id" : Plane_id,
        seat_level : level,
        seat_id : seat_id
    };
    let data3 = {
        "ID": localStorage.getItem("id")
    }
    console.log(data3);
    axios.all([
        Request().post("/public/index.php?action=updatePlaneseatstatus",Qs.stringify(data1)), //將該座位設定定位狀態
        Request().post("/public/index.php?action=newTicket_detail",Qs.stringify(data2)), //新增到 ticket_detail
        Request().get("/public/index.php?action=getlastdetailid"), //抓ticket_detail 剛新增的ticket_detail號碼
        Request().post("/public/index.php?action=getCustomerAsID",Qs.stringify(data3)) //抓customer的Customer_id
    ])
    .then(axios.spread((res1, res2, res3,res4) => {
        console.log(res1['data'])
        console.log(res2['data'])
        const Tickets_detail_id = res3['data']['result'][0]['Tickets_detail_id']; 
        const Customer_id = res4['data']['result'][0]['Customer_id'];
        if (Customer_id == "undefined") {
            Customer_id = "";
        }
        console.log(Tickets_detail_id);
        console.log(Customer_id);
        let data4 ={
            "Tickets_detail_id": Tickets_detail_id,
            "Customer_id" : Customer_id,
            "Place_id" : 8 //晚點要設讓他領票的地點
        };
        Request().post("/public/index.php?action=newTicket",Qs.stringify(data4)) //新增到ticket
        .then(function (resp){
            console.log(resp['data']);
        })
        .catch(err => {
            console.error(err); 
        })
    }))

}
export {gobookseat}