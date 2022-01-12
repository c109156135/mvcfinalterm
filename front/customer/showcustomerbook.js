import { Request } from "../Request.js";
import { cancelbook } from "./cancelbook.js";
function showcustomerbook() {
    const ID = localStorage.getItem("id");
    const data = {
        "ID" : ID,
    }
    Request().post("/public/index.php?action=getticketasID",Qs.stringify(data))
    .then(function(resp) {
        const response = resp['data'];
        const rows = response['result'];
        console.log(rows);
        let str = `
        <table id="myTable2" class="display">
        <thead>
            <tr>
                <th>票號</th>
                <th>領票地點</th>
                <th>航班代號</th>
                <th>訂票艙位</th>
                <th>訂票位子ID</th>
                <th>票是否有效</th>
                <th>取消飛機訂位</th>
            </tr>
        </thead>
        <tbody>`
            rows.forEach(element => {
                str += `<tr><td>` + element['Tickets_id'] + `</td>`
                str += `<td>` + element['Place_Name'] + `</td>`
                str += `<td>` + element['Plane_id'] + `</td>`
                str += `<td>` + level(element['seat_level']) + `</td>`
                str += `<td>` + element['seat_id'] + `</td>`
                str += `<td>` + valid(element['valid']) + `</td>`
                str += `<td>` + `<button id="cancelbook" class="btn btn-secondary btn-sm" seat_id=`+ element['seat_id'] +` plane_id=`+ element['Plane_id'] +` value=` + element['Tickets_detail_id'] +`>取消</button></td></tr>`
            }); 
        str +=`
        </tbody>
        </table>`;
        $("#content").html(str);
        $('#myTable2').DataTable();
        $("button[id=cancelbook]").click(function (e) { 
            const Tickets_detail_id = $(this).val();
            const seat_id = $(this).attr("seat_id");
            const plane_id = $(this).attr("plane_id");
            cancelbook(Tickets_detail_id,seat_id,plane_id);
        });
    })
    .catch(err => {
        console.error(err); 
    })
}
function valid(valid) {
    console.log(valid);
    if (valid == 'true') {
        valid = "有效";
    } else {
        valid = "無效";        
    }
    return valid;
}

function level(level) {
    console.log(level);
    switch (level) {
        case "first":
            level = "頭等艙";
            return level;
        
        case "business":
            level = "商務艙";
            return level;

        case "economy":
            level = "經濟艙";
            return level;

        default:
            break;
    }
}
export {showcustomerbook}