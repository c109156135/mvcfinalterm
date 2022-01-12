import { Request } from "../Request.js";
import { showbookseat } from "./showbookseat.js";

function showcondiflight(Takeoff_place,Arrived_place,date) {
    let data = {
        "Takeoff_Place" : Takeoff_place,
        "Arrived_place" : Arrived_place,
        "date" : date
    }
    Request().post("/public/index.php?action=getFlight",Qs.stringify(data))
    .then(function (resp){
        let response = resp['data'];
        let rows = response['result'];
        let str = `<table id="showcondiflight" class="display">`;
        str += `起程時間:` + date + `,啟程地點:`+ Takeoff_place + `,到達地點:` + Arrived_place + `的搜尋結果<br>`;
        str += `<thead>`;
        str += `<th>航班編號</th>`;
        str += `<th>啟程地</th>`;
        str += `<th>到達地</th>`;
        str += `<th>預計起飛時間</th>`;
        str += `<th>預計到達時間</th>`;
        str += `<th>訂票</th>`;
        str += `</thead>`;
        str += `<tbody>`;
            rows.forEach(element => {
                str += `<tr><td>` + element['Flight_id'] + `</td>`;
                str += `<td>` + element['Takeoff_place'] + `</td>`;
                str += `<td>` + element['Arrived_place'] + `</td>`;
                str += `<td>` + element['Takeoff_time'] + `</td>`;
                str += `<td>` + element['Arrived_time'] + `</td>`;
                str += `<td>` + `<button id="showbookseat" class="btn btn-secondary btn-sm" value=`+ element['Flight_id'] +`>訂票</button>` + `</td></tr>`;
            });
        str += `</tbody>`;
        str += `</table>`;
        
        $("#content").html(str);
        $('#showcondiflight').DataTable();
        $("#showbookseat").click(function (e) { 
            const Flight_id = $(this).val();
            showbookseat(Flight_id);
        });
    })
    .catch(err => {
        console.error(err); 
    })
}
export {showcondiflight}