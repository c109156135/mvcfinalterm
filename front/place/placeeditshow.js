import { Request } from "../Request.js";
import { placeshow } from "./placeshow.js";
function placeeditshow(Place_id,str){
    let data = {
        "Place_id":Place_id
    };
    Request().post("/public/index.php?action=getPlacesAsid",Qs.stringify(data))
    .then(function(resp) {
        let response = resp['data'];
        let rows = response['result'];
        str += `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">編輯售票場地資訊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                售票場所編號:<input type="text" id="Place_id" unselectable="on" readonly><br><br>
                售票場所地點:<input type="text" id="Place_Name"><br><br>
                售票場所營業狀態:<input type="text" id="Place_Status"><br><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id ="changeplace">修改</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
        $("#content").html(str);
        console.log(rows);
        rows.forEach(element => {
          $("#Place_id").val(element['Place_id']);
          $("#Place_Name").val(element['Place_Name']);
          $("#Place_Status").val(element['Place_Status']);
        });

        $('#myTable').DataTable();
        var modalToggle = document.getElementById('exampleModal');
        $(modalToggle).modal('show');
        $("button[id=changeplace]").click(function (e) { 
          placeshow();
          $(modalToggle).modal('hide');
        });
        $("button[id=editplace]").click(function (e) { 
            const Place_id = $(this).val();
            console.log(Place_id);
        });
    })
    .catch(err => {
        console.error(err); 
    })
}
export {placeeditshow}