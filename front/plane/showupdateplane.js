import { Request } from "../Request.js";
import { goupdateplane } from "./goupdateplane.js"
function showupdateplane(str,Plane_id) {
    let data = {
      "Plane_id": Plane_id
    };
    axios.all([
      Request().get("/public/index.php?action=getFlights"),
      Request().post("/public/index.php?action=getPlanes",Qs.stringify(data))
    ])
    .then(axios.spread((res1, res2)=>{
      let flight_ids = new Array;
      let response = res1['data'];
      let rows = response['result'];
      rows.forEach(element => {
          flight_ids.push(element['Flight_id']);
      });
      str += `
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <button type="button" class="btn btn-primary" id ="goupdateplane" data-bs-dismiss="modal">新增</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
            </div>
          </div>
        </div>
        </div>`;
      $("#content").html(str);
      $('#myTable').DataTable();
      
      $("#Plane_Name").val(res2['data']['result'][0]['Plane_Name']);
      $(".selector").val(res2['data']['result'][0]['Flight_id']);
      $(".selector2").val(res2['data']['result'][0]['Plane_status']);

      var modalToggle3 = document.getElementById('exampleModal3');
      $(modalToggle3).modal('show');
      $("button[id=goupdateplane]").click(function (e) { 
        goupdateplane(Plane_id);
        console.log("goupdateplane");
      });

      $("button[id=editplane]").click(function (e) { 
        const Plane_id = $(this).val();
        console.log("go edit this plane");
        showupdateplane(str,Plane_id);
      });

    }))
}
export {showupdateplane}