import { Request } from "../Request.js";
import { customershow } from "./customershow1.js";
function customeredit() {
    let data = {
        "Customer_id":parseInt($("#customerid").val()),
        "ID":$("#ID").val(),
        "Name":$("#Name").val(),
        "Phone":$("#Phone").val()
    };
    Request().post("/public/index.php?action=updateCustomer",Qs.stringify(data))
    .then(function(resp){
        console.log(resp['data']);
        customershow();
    })
    .catch(err => {
        console.error(err); 
    })
    
}
export {customeredit}