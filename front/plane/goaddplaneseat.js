import { planeshow } from "./planeshow.js";
import { Request } from "../Request.js";
function goaddplaneseat(Plane_Name) {
    let data={
        "Plane_name" : Plane_Name
    };
    console.log(data);
    Request().post("/public/index.php?action=getPlanesAsName",Qs.stringify(data))
    .then(function (resp){
        console.log(resp['data']['result'][0]['Plane_id']);
        let Plane_id = resp['data']['result'][0]['Plane_id'];
        let data={
            "Plane_id" : Plane_id
        };
        Request().post("/public/index.php?action=addPlane",Qs.stringify(data))
        .then(function (resp){
                console.log(resp['result'])
                //新增班機座位
                let data = {
                    "firstline":parseInt($("#firstline").val()),
                    "firstrow":parseInt($("#firstrow").val()),
                    "busline":parseInt($("#businessline").val()),
                    "busrow":parseInt($("#businessrow").val()),
                    "ecoline":parseInt($("#economyline").val()),
                    "ecorow":parseInt($("#economyrow").val()),
                    "Plane_id":parseInt(Plane_id)
                };
                console.log(data);
                Request().post("/public/index.php?action=addPlaneSeat",Qs.stringify(data))
                .then(function (resp){
                    console.log(resp['data']['result']);
                    planeshow();
                })
                .catch(err => {
                    console.error(err); 
                })
        })
        .catch(err => {
            console.error(err); 
        })
    })
    .catch(err => {
        console.error(err); 
    })

    
}
export {goaddplaneseat}

