import { Request } from "../Request.js";
import { gobookseat } from "./gobookseat.js";

function showbookseat(Flight_id) {
    let data1 = {
        "Flight_id" : Flight_id
    }
    
    Request().post("/public/index.php?action=getFlightasplaneid",Qs.stringify(data1))
    .then(function (resp){
        const Plane_id = resp['data']['result'][0]['Plane_id'];
        let data2={
            "Plane_id" : Plane_id,
            "seat_status" : "empty"
        };    
        Request().post("/public/index.php?action=showPlaneseat",Qs.stringify(data2))
        .then(function (resp){
            let result = resp['data'];
            let rows = result['result'];
            console.log(rows);
            let str = `
            <table id="myTable2" class="display">
            <thead>
                <tr>
                    <th>座位編號</th>
                    <th>行</th>
                    <th>列</th>
                    <th>艙位等級</th>
                    <th>座位訂票狀態</th>
                    <th>訂票</th>
                </tr>
            </thead>
            <tbody>`
                rows.forEach(element => {
                    str += `<tr><td>` + element['seat_id'] + `</td>`
                    str += `<td>` + element['seat_line'] + `</td>`
                    str += `<td>` + element['seat_row'] + `</td>`
                    str += `<td>` + element['seat_level'] + `</td>`
                    str += `<td>` + element['seat_status'] + `</td>`
                    str += `<td>` + `<button id="bookseat" class="btn btn-secondary btn-sm" level=`+ element['seat_level'] +` status=`+ element['seat_status'] +` value=` + element['seat_id'] +`>訂票</button></td></tr>`
                }); 
            str +=`
            </tbody>
            </table>`;
            $("#content").html(str);
            $('#myTable2').DataTable();
            $("button[id=bookseat]").click(function (e) { 
                const seat_id = $(this).val();
                const seat_status = $("button[id=bookseat]").attr("status");
                console.log(seat_status);
                const level = $(this).attr("level");
                gobookseat(Plane_id,seat_id,seat_status,level)
            });
        })
        .catch(err => {
            console.error(err); 
        })
    
    })
    .catch(err => {
        console.error(err); 
    })
}
export {showbookseat}