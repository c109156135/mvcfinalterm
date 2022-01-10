import { Request } from "../Request.js";
import { showaddplane } from "./showaddplane.js";
function planeshow() {
    Request().get("/public/index.php?action=getPlanes")
    .then(function (resp){
        const response = resp['data'];
        switch (response['status']) {
            case 200:
                const rows = response['result'];
                let str = `<button id="addplane" class="btn btn-success btn-sm">新增飛機</button>`;
                str += `<table id="myTable" class="display">`;
                str += `<thead>`
                str += `<th>飛機機號</th>`;
                str += `<th>指定航班</th>`;
                str += `<th>飛機代號</th>`;
                str += `<th>飛機使用狀態</th>`;
                str += `<th>編輯飛機抬頭</th>`;
                str += `<th>編輯飛機座位</th>`;
                str += `</thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<tr><td>` + element['Plane_id'] + `</td>`;
                    str += `<td>` + element['Flight_id'] + `</td>`;
                    str += `<td>` + element['Plane_Name'] + `</td>`;
                    str += `<td>` + element['Plane_status'] + `</td>`;
                    str += `<td>` + `<button id="editplane" class="btn btn-secondary btn-sm" value=` + element['Plane_id'] + `>修改抬頭</button>` + `</td>`;
                    str += `<td>` + `<button id="editplaneseat" class="btn btn-secondary btn-sm" value=` + element['Plane_id'] + `>修改座位</button>` + `</td></tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                
                $("#content").html(str);
                $('#myTable').DataTable();
                $("button[id=editplane]").click(function (e) { 
                    const Plane_id = $(this).val();
                    console.log("go edit this plane");
                });

                $("button[id=addplane]").click(function (e) { 
                    showaddplane(str);
                });

                $("button[id=editplaneseat]").click(function (e) { 
                    showaddplane(str);
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

export {planeshow}