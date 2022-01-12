import { Request } from "../Request.js";
import { gosetinvalid } from "./gosetinvalid.js";

function showtickets() {
    Request().get("/public/index.php?action=getvalidTickets")
    .then(function (resp){
        const response = resp['data'];
        switch (response['status']) {
            case 200:
                const rows = response['result'];
                let str = `<table id="tickettable" class="display">`;
                str += `<thead>`
                str += `<th>飛機票編號</th>`;
                str += `<th>航班編號</th>`;
                str += `<th>航班飛機名稱</th>`;
                str += `<th>座位id</th>`;
                str += `<th>訂票人名稱</th>`;
                str += `<th>訂票地點</th>`;
                str += `<th>訂票時間</th>`;
                str += `<th>取消訂票</th>`;
                str += `</thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<tr><td>` + element['Tickets_id'] + `</td>`;
                    str += `<td>` + element['Flight_id'] + `</td>`;
                    str += `<td>` + element['Plane_Name'] + `</td>`;
                    str += `<td>` + element['seat_id'] + `</td>`;
                    str += `<td>` + element['Name'] + `</td>`;
                    str += `<td>` + element['Place_Name'] + `</td>`;
                    str += `<td>` + element['booked_time'] + `</td>`;
                    str += `<td>` + `<button id="editseatvalid" class="btn btn-secondary btn-sm" Tickets_detail_id="`+ element['Tickets_detail_id'] + `" plane="`+ element['Plane_id'] + `" value="` + element['seat_id'] + `">取消訂票</button>` + `</td></tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                
                $("#content").html(str);
                $('#tickettable').DataTable();
                $("button[id=editseatvalid]").click(function (e) { 
                    const seatid = $(this).val();
                    const plane_id = $(this).attr("plane");
                    const Tickets_detail_id = $(this).attr("Tickets_detail_id");
                    gosetinvalid(plane_id,seatid,Tickets_detail_id);
                });
                break;
        
            default:
                break;
        }
    })
}
export {showtickets}