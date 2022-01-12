import { Request } from "../Request.js";
import { showcondiflight } from "./showcondiflight.js";
function showbookticket() {
    Request().get("/public/index.php?action=getAirport")
    .then(function (resp){
        let results = resp['data']
        let rows = results['result'];
        let localtime = new Date();
        let oneweektime = new Date();
        oneweektime = oneweektime.setDate(oneweektime.getDate()+7);
        localtime = Date.parse(localtime);

        var oneweekstring = oneweektime;
        oneweekstring = new Date(oneweekstring);
        var year = oneweekstring.getFullYear()+'年';
        var month = oneweekstring.getMonth()+1+'月';
        var date = oneweekstring.getDate()+'日';
        oneweekstring = [year,month,date].join('-');

        var localtimestring = localtime+100000000;
        localtimestring = new Date(localtimestring);
        var year = localtimestring.getFullYear()+'年';
        var month = localtimestring.getMonth()+1+'月';
        var date = localtimestring.getDate()+'日';
        localtimestring = [year,month,date].join('-');
        

        let str = `
        <div class="modal fade" id="exampleModalx" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">欲查詢的飛機航班資訊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                    啟程地:<select name="Takeoff_place" class="selector">`;
                    rows.forEach(element => {
                        str+=`<option value=` + element['place']+ `>`+ element['place'] +`</option>`
                    });
                    str+=`</select><br><br>

                    目的地:<select name="Arrived_place" class="selector2">`;
                    rows.forEach(element => {
                        str+=`<option value=` + element['place']+ `>`+ element['place'] +`</option>`
                    });
                    str+=`</select><br><br>
                    啟程時間:<br>
                    請選擇` + localtimestring  + ` 至 ` + oneweekstring + ` 的時間
                    <input type="date" class="form-control" id="date" name="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="goshowcondiflight" data-bs-dismiss="modal">新增</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">取消</button>
              </div>
            </div>
          </div>
          </div>`;
      $("#content").html(str);
      var modalTogglex = document.getElementById('exampleModalx');
      $(modalTogglex).modal('show');
                    
      $("#date").focusout(function(){
        let date = $("#date").val();
        date = Date.parse(date);
        if(+date > +oneweektime || +date < +localtime){
            alert("請選取有效的日期");
            $("#date").val("");
        }
      });

      $("button[id=goshowcondiflight]").click(function (e) { 
        const Takeoff_place = $(".selector").val();
        const Arrived_place = $(".selector2").val();
        const date = $("#date").val();
        showcondiflight(Takeoff_place,Arrived_place,date);
      });

    })
    .catch(err => {
        console.error(err); 
    })
}
export {showbookticket}