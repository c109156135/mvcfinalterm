import { addflight } from "./addflight.js";
import { flighteditshow } from "./flighteditshow.js";
function showaddflight(str) {
        str += `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">新增航班</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                航班出發星期:<select name="workday" class="selector">
                <option value=1>星期一</option>
                <option value=2>星期二</option>
                <option value=3>星期三</option>
                <option value=4>星期四</option>
                <option value=5>星期五</option>
                <option value=6>星期六</option>
                <option value=7>星期七</option>
                </select><br><br>
                出發地:<input type="text" id="Takeoff_place"><br><br>
                到達地:<input type="text" id="Arrived_place"><br><br>
                預計出發時間:<input type="text" id="Takeoff_time"><br><br>
                預計到達地點:<input type="text" id="Arrived_time"><br><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id ="goaddflight">新增</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
        $("#content").html(str);
        $('#myTable').DataTable();
        var modalToggle = document.getElementById('exampleModal');
        $(modalToggle).modal('show');
        $("button[id=goaddflight]").click(function (e) { 
          addflight();
          $(modalToggle).modal('hide');
        });
        $("button[id=editflight]").click(function (e) { 
            const Flight_id = $(this).val();
            flighteditshow(Flight_id,str);
        });
        

}
export {showaddflight}