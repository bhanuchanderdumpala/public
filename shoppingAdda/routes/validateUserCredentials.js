var express = require("express");

var router = express.Router();
router.get('/', (request, response) => {
    response.send("Hello World this is our own created web services meams api");
    var responseobj = {};
    if (request.body.accountid == "admin" && request.body.password == "Admin@123") {
        responseobj.status = "Valid";
        statuscode = 200;
        responseobj.message = "User is authenticated";
    }
    else {
        responseobj.status = "Invalid";
        statuscode = 401;
        responseobj.message = "User is not authenticated";
    }
    response.send(JSON.stringify(responseobj));


});

module.exports = router;