import { customershow } from "./customer/customershow1.js";
import { showcustomerbook } from "./customer/showcustomerbook.js";
import { flightshow } from "./flight/flightshow.js";
import { placeshow } from "./place/placeshow.js";
import { planeshow } from "./plane/planeshow.js";
import { showbookticket } from "./ticket/showbookticket.js";
import { showtickets } from "./ticket/showtickets.js";
function startpage() {
    const sp=`
    <button id="customer" class="btn btn-primary btn-sm">顧客管理</button>
    <button id="flight" class="btn btn-primary btn-sm">航班管理</button>
    <button id="place" class="btn btn-primary btn-sm">售票地點管理</button>
    <button id="tickets" class="btn btn-primary btn-sm">售票管理</button>
    <button id="plane" class="btn btn-primary btn-sm">飛機管理</button><br><br>
    <button id="bookshow" class="btn btn-primary btn-sm">飛機訂票</button>
    <button id="showcustomerbook" class="btn btn-primary btn-sm">查詢自己的訂票紀錄</button><br><br><br>
    <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#customer").click(function (e) { 
        customershow();
    });

    $("#flight").click(function (e) { 
        flightshow();
    });

    $("#place").click(function (e) { 
        placeshow();
    });

    $("#tickets").click(function (e) { 
        showtickets();
    });

    $("#plane").click(function (e) { 
        planeshow();
    });

    $("#bookshow").click(function (e) { 
        showbookticket();
    });
    $("#showcustomerbook").click(function (e) { 
        showcustomerbook();
        
    });
}
export {startpage}