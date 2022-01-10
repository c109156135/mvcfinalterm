import { goaddplaneseat } from "./goaddplaneseat.js";

function showaddseat(str,Plane_Name) {
    str += `
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">新增飛機座位資訊</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                頭等艙列數:<input type="text" id="firstline"><br><br>
                頭等艙行數:<input type="text" id="firstrow"><br><br>
                商務艙列數:<input type="text" id="businessline"><br><br>
                商務艙行數:<input type="text" id="businessrow"><br><br>
                經濟艙列數:<input type="text" id="economyline"><br><br>
                經濟艙行數:<input type="text" id="economyrow"><br><br>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="goaddplaneseat" data-bs-dismiss="modal">新增</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
            </div>
          </div>
        </div>
        </div>`;
    $("#content").html(str);
    $('#myTable').DataTable();
    var modalToggle2 = document.getElementById('exampleModal2');
    $(modalToggle2).modal('show');
    document.getElementById("goaddplaneseat").addEventListener("click", function (e) { 
        goaddplaneseat(Plane_Name);
    });
}
export {showaddseat};