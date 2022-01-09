import { addplace } from "./addplace.js";
import { placeeditshow } from "./placeeditshow.js"

function showaddplace(str) {
    str += `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">新增售票地點</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                售票場所名稱:<input type="text" id="Place_Name"><br><br>
                場所狀態:<select name="Place_Status" class="selector">
                    <option value="OPEN">OPEN</option>
                    <option value="CLOSE">CLOSE</option>
                </select><br><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id ="goaddplace">新增</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
          $("#content").html(str);
          $('#myTable').DataTable();
          var modalToggle = document.getElementById('exampleModal');
          $(modalToggle).modal('show');
          $("button[id=goaddplace]").click(function (e) { 
            addplace();            
            $(modalToggle).modal('hide');
          });
          $("button[id=editplace]").click(function (e) { 
            const Place_id = $(this).val();
            placeeditshow(Place_id,str);
  });
}
export {showaddplace}