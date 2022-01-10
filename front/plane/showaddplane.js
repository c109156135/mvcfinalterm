import { Request } from "../Request.js";
import { addplane } from "./addplane.js";
import { showaddseat } from "./showaddseat.js";

function showaddplane(str) {
  Request().get("/public/index.php?action=getFlights")
    .then(function(resp){
      let flight_ids = new Array;
      let response = resp['data'];
      let rows = response['result'];
      rows.forEach(element => {
          flight_ids.push(element['Flight_id']);
      });
      str += `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">新增飛機資訊</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              飛機名稱:<input type="text" id="Plane_Name"><br><br>
              指定航班:<select name="Flight_id" class="selector">`;
              flight_ids.forEach(element => {
                str+=`<option value=` + element+ `>`+ element +`</option>`
              });
              str+=`</select><br><br>
              飛機狀態:<select name="Plane_status" class="selector2">
              <option value=Working>Working</option>
              <option value=Repairing>Repairing</option>
              <option value=Stopped>Stopped</option>
              </select><br><br>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id ="goaddplane">新增</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
            </div>
          </div>
        </div>
        </div>`;
      $("#content").html(str);
      $('#myTable').DataTable();
      var modalToggle = document.getElementById('exampleModal');
      $(modalToggle).modal('show');
      $("button[id=goaddplane]").click(function (e) { 
        const Plane_Name = $("#Plane_Name").val();
        addplane();
        $(modalToggle).modal('hide');
        console.log("789");
        showaddseat(str,Plane_Name);
      });

      $("button[id=editplane]").click(function (e) { 
        const Place_id = $(this).val();
        placeeditshow(Place_id,str);
      });
    })
    .catch(err => {
      console.error(err); 
    })
        
}
export {showaddplane}