import { Request } from "../Request.js";
import { customeredit } from "./customeredit.js";
function customereditshow(customerid,str){
  let data = {
    "Customer_id":customerid
  };
  Request().post("/public/index.php?action=getCustomerAsCustid",Qs.stringify(data))
  .then(function(resp) {
        let response = resp['data'];
        let rows = response['result'];
        str += `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">編輯顧客資訊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                顧客編號:<input type="text" id="customerid" unselectable="on" readonly value="123"><br><br>
                顧客身份證字號:<input type="text" id="ID"><br><br>
                顧客名稱:<input type="text" id="Name"><br><br>
                顧客電話號碼:<input type="text" id="Phone"><br><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id ="changecustomer">修改</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
        $("#content").html(str);

        rows.forEach(element => {
          $("#customerid").val(element['Customer_id']);
          $("#ID").val(element['ID']);
          $("#Name").val(element['Name']);
          $("#Phone").val(element['Phone']);
        });

        $('#myTable').DataTable();
        var modalToggle = document.getElementById('exampleModal');
        $(modalToggle).modal('show');
        $("button[id=changecustomer]").click(function (e) { 
          customeredit();
          $(modalToggle).modal('hide');
        });
        $("button[id=editcustomer]").click(function (e) { 
          const customerid = $(this).val();
          customereditshow(customerid,str);
        });
      
    })
    .catch(err => {
      console.error(err); 
    })
    
  
}
export {customereditshow}