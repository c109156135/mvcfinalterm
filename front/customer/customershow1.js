import { Request } from "../Request.js";
import { customereditshow } from "./customereditshow.js";
function customershow() {
    Request().get("/public/index.php?action=getCustomers")
    .then(function (resp){
        const response = resp['data'];
        switch (response['status']) {
            case 200:
                const rows = response['result'];
                let str = `<table id="myTable" class="display">`;
                str += `<thead>`
                str += `<th>顧客代號</th>`;
                str += `<th>顧客身分證字號</th>`;
                str += `<th>顧客名稱</th>`;
                str += `<th>顧客電話號碼</th>`;
                str += `<th>修改</th>`;
                str += `</thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<tr><td id='id'>` + element['Customer_id'] + `</td>`;
                    str += `<td>` + element['ID'] + `</td>`;
                    str += `<td>` + element['Name'] + `</td>`;
                    str += `<td>` + element['Phone'] + `</td>`;
                    str += `<td>` + `<button id="editcustomer" class="btn btn-secondary btn-sm" value=` + element['Customer_id'] + `>修改</button>` + `</td></tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $('#myTable').DataTable();
                $("button[id=editcustomer]").click(function (e) { 
                    const customerid = $(this).val();
                    customereditshow(customerid,str);
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
export {customershow}