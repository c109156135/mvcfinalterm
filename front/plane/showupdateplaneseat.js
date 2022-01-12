import {Request} from "../Request.js";
import { goupdateseatstatus } from "./goupdateseatstatus.js";
function showupdateplaneseat(Plane_id) {
    let data={
        "Plane_id" : Plane_id,
        "seat_status" : "booked"
    };
    Request().post("/public/index.php?action=showPlaneseat",Qs.stringify(data))
    .then(function (resp){
        let result = resp['data'];
        let rows = result['result'];
        console.log(result);
        let str = `
        <table id="myTable2" class="display">
        <thead>
            <tr>
                <th>座位編號</th>
                <th>行</th>
                <th>列</th>
                <th>艙位等級</th>
                <th>座位訂票狀態</th>
                <th>修改訂票狀態</th>
            </tr>
        </thead>
        <tbody>`
            rows.forEach(element => {
                str += `<tr><td>` + element['seat_id'] + `</td>`
                str += `<td>` + element['seat_line'] + `</td>`
                str += `<td>` + element['seat_row'] + `</td>`
                str += `<td>` + element['seat_level'] + `</td>`
                str += `<td>` + element['seat_status'] + `</td>`
                str += `<td>` + `<button id="updateseatstatus" class="btn btn-secondary btn-sm" status=`+ element['seat_status'] +` value=` + element['seat_id'] +`>修改座位訂票狀態</button></td></tr>`
            }); 
        str +=`
        </tbody>
        </table>`;
        $("#content").html(str);
        $('#myTable2').DataTable();
        $("button[id=updateseatstatus]").click(function (e) { 
            const seat_id = $(this).val();
            const seat_status = $("button[id=updateseatstatus]").attr("status");
            console.log(seat_status);
            goupdateseatstatus(Plane_id,seat_id,seat_status);

        });
    })
    .catch(err => {
        console.error(err); 
    })
}
export {showupdateplaneseat}