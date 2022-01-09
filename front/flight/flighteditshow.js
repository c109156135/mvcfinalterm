import { Request } from "../Request.js";
import { flightedit } from "./flightedit.js";
function flighteditshow(Flight_id,str){
    let data = {
        "Flight_id":Flight_id
    };
    Request().post("/public/index.php?action=getFlightAsId",Qs.stringify(data))
    .then(function(resp) {
        let response = resp['data'];
        let rows = response['result'];
        str += `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">編輯航班資訊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                航班編號:<input type="text" id="Flight_id" unselectable="on" readonly><br><br>
                航班出發星期:<input type="text" id="workday"><br><br>
                出發地:<input type="text" id="Takeoff_place"><br><br>
                到達地:<input type="text" id="Arrived_place"><br><br>
                預計出發時間:<input type="text" id="Takeoff_time"><br><br>
                預計到達地點:<input type="text" id="Arrived_time"><br><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id ="changeflight">修改</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
        $("#content").html(str);

        rows.forEach(element => {
          $("#Flight_id").val(element['Flight_id']);
          $("#workday").val(element['workday']);
          $("#Takeoff_place").val(element['Takeoff_place']);
          $("#Arrived_place").val(element['Arrived_place']);
          $("#Takeoff_time").val(element['Takeoff_time']);
          $("#Arrived_time").val(element['Arrived_time']);
        });

        $('#myTable').DataTable();
        var modalToggle = document.getElementById('exampleModal');
        $(modalToggle).modal('show');
        $("button[id=changeflight]").click(function (e) { 
          flightedit();
          $(modalToggle).modal('hide');
        });
        $("button[id=editflight]").click(function (e) { 
            const Flight_id = $(this).val();
            flighteditshow(Flight_id,str);
        });
    })
    .catch(err => {
        console.error(err); 
    })
}
export {flighteditshow}