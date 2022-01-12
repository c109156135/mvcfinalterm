<?php

    $router -> register("getPlanes","Plane","getPlanes");
    $router -> register("getStatusPlanes","Plane","getStatusPlanes");
    $router -> register("updateFlight","Plane","updateFlight");
    $router -> register("updatePlaneStatus","Plane","updatePlaneStatus");
    $router -> register("newPlane","Plane","newPlane");
    $router -> register("addPlaneSeat","Plane","addPlaneSeat");
    $router -> register("addPlane","Plane","addPlane");
    $router -> register("getPlanesAsName","Plane","getPlanesAsName");
    $router -> register("updatePlane","Plane","updatePlane");
    $router -> register("showPlaneseat","Plane","showPlaneseat");
    $router -> register("updatePlaneseatstatus","Plane","updatePlaneseatstatus");
    $router -> register("getAirport","Plane","getAirport");

    $router -> register("getPlaces","Place","getPlaces");
    $router -> register("getPlacesAsid","Place","getPlacesAsid");
    $router -> register("getStatusPlaces","Place","getStatusPlaces");
    $router -> register("newPlace","Place","newPlace");
    $router -> register("updatePlace","Place","updatePlace");

    $router -> register("getCustomerAsID","Customer","getCustomerAsID");
    $router -> register("getCustomerAsCustid","Customer","getCustomerAsCustid");
    $router -> register("newCustomer","Customer","newCustomer");
    $router -> register("updateCustomer","Customer","updateCustomer");
    $router -> register("getCustomers","Customer","getCustomers");
    
    $router -> register("getFlight","Flight","getFlight");
    $router -> register("getFlightAsId","Flight","getFlightAsId");
    $router -> register("newflight","Flight","newflight");
    $router -> register("getFlights","Flight","getFlights");
    $router -> register("updateFlights","Flight","updateFlights");
    $router -> register("getFlightasplaneid","Flight","getFlightasplaneid");
    
    $router -> register("getflight_recordsAsFlightid","Flight_records","getflight_recordsAsFlightid");
    $router -> register("newflight_records","Flight_records","newflight_records");
    
    $router -> register("getTicketsAsTicketid","Tickets","getTicketsAsTicketid");
    $router -> register("getTicketsAsCustomerid","Tickets","getTicketsAsCustomerid");
    $router -> register("getTicketsAsFlightid","Tickets","getTicketsAsFlightid");
    $router -> register("newTicket","Tickets","newTicket");
    $router -> register("getvalidTickets","Tickets","getvalidTickets");
    $router -> register("updateTicketsvalid","Tickets","updateTicketsvalid");
    $router -> register("newTicket_detail","Tickets","newTicket_detail");
    $router -> register("getlastdetailid","Tickets","getlastdetailid");
    $router -> register("getticketasID","Tickets","getticketasID");

    $router -> register("doLogin","User","doLogin");




?>