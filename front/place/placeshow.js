import { Request } from "../Request.js";
import { placeeditshow } from "./placeeditshow.js";
import { showaddplace } from "./showaddplace.js";
function placeshow() {
    Request().get("/public/index.php?action=getPlaces")
    .then(function (resp){
        const response = resp['data'];
        switch (response['status']) {
            case 200:
                const rows = response['result'];
                let str = `<button id="addplace" class="btn btn-success btn-sm">新增售票地點</button>`;
                str += `<table id="myTable" class="display">`;
                str += `<thead>`
                str += `<th>售票場所編號</th>`;
                str += `<th>售票場所名稱</th>`;
                str += `<th>售票地點營業狀態</th>`;
                str += `<th>修改</th>`;
                str += `</thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<tr><td>` + element['Place_id'] + `</td>`;
                    str += `<td>` + element['Place_Name'] + `</td>`;
                    str += `<td>` + element['Place_Status'] + `</td>`;
                    str += `<td>` + `<button id="editplace" class="btn btn-secondary btn-sm" value=` + element['Place_id'] + `>修改</button>` + `</td></tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                
                $("#content").html(str);
                $('#myTable').DataTable();
                $("button[id=editplace]").click(function (e) { 
                    const Place_id = $(this).val();
                    placeeditshow(Place_id,str);
                });
                $("button[id=addplace]").click(function (e) { 
                    showaddplace(str);
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

export {placeshow}