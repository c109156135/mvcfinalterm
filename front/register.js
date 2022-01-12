import { Request } from "./Request.js";
function showregisterpage(token) {
    console.log(token);
    let str =` 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增顧客資訊</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            身分證字號:<input type="text" id="ID"><br><br>
            姓名:<input type="text" id="Name"><br><br>
            電話號碼:<input type="text" id="Phone"><br><br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="addcustomer" data-bs-dismiss="modal">新增</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
          </div>
        </div>
      </div>
      </div>`;
    $("#content").html(str);
    var modalToggle = document.getElementById('exampleModal');
    $(modalToggle).modal('show');
    $("#addcustomer").click(function (e) { 
        const ID = $("#ID").val();
        const Name = $("#Name").val();
        const Phone = $("#Phone").val();
        window.localStorage.setItem("jwtToken",token);
        goaddcustomer(ID, Name, Phone);
    });
}
function goaddcustomer() {
    let data2 = {
      "ID":$(ID).val(),
      "Name": $(Name).val(),
      "Phone":$(Phone).val()
    };
    console.log(data2);
    Request().post("/public/index.php?action=newCustomer",Qs.stringify(data2))
    .then(function (resp){
      console.log(resp['data']);
      window.localStorage.setItem("jwtToken","");
    })
    .catch(err => {
      console.error(err); 
    })
}
export {showregisterpage}