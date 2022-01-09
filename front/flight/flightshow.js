import { Request } from "../Request.js";
import { showaddflight } from "./showaddflight.js";
import { flighteditshow } from "./flighteditshow.js";
function flightshow() {
    Request().get("/public/index.php?action=getFlights")
    .then(function (resp){
        const response = resp['data'];
        switch (response['status']) {
            case 200:
                const rows = response['result'];
                let str = `<button id="addflight" class="btn btn-success btn-sm">新增班機</button>`;
                str += `<table id="myTable" class="display">`;
                str += `<thead>`
                str += `<th>航班編號</th>`;
                str += `<th>航班出發星期</th>`;
                str += `<th>出發地</th>`;
                str += `<th>到達地</th>`;
                str += `<th>預計出發時間</th>`;
                str += `<th>預計到達時間</th>`;
                str += `<th>修改</th>`;
                str += `</thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<tr><td>` + element['Flight_id'] + `</td>`;
                    str += `<td>` + fixworkday(element['workday']) + `</td>`;
                    str += `<td>` + element['Takeoff_place'] + `</td>`;
                    str += `<td>` + element['Arrived_place'] + `</td>`;
                    str += `<td>` + fixtime(element['Takeoff_time']) + `</td>`;
                    str += `<td>` + fixtime(element['Arrived_time']) + `</td>`;
                    str += `<td>` + `<button id="editflight" class="btn btn-secondary btn-sm" value=` + element['Flight_id'] + `>修改</button>` + `</td></tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $('#myTable').DataTable();
                $("button[id=editflight]").click(function (e) { 
                    const Flight_id = $(this).val();
                    flighteditshow(Flight_id,str);
                });
                $("#addflight").click(function (e) { 
                    showaddflight(str);
                    
                });

                break;
        
            default:
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    })
}

function fixworkday(workday) {
    workday = parseInt(workday);
    switch (workday) {
        case 1:
            workday = "星期一";
            return workday
        case 2:
            workday = "星期二";
            return workday
        case 3:
            workday = "星期三";
            return workday
        case 4:
            workday = "星期四";
            return workday
        case 5:
            workday = "星期五";
            return workday
        case 6:
            workday = "星期六";
            return workday
        case 7:
            workday = "星期七";
            return workday
            
        default:
            break;
    }
}

function fixtime(time){
    time = time.substr(0,8);
    return time
}
export {flightshow}