var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    // res.send("This is new websservice for employees for own creadted by meeeeeeeeeeeeeeee");

    var empdetails = [
        {
            empname: "John",
            empid: "101",
            empdept: "IT"
        },

        {
            empname: "Smith",
            empid: "102",
            empdept: "HR"
        },

        {
            empname: "Peter",
            empid: "103",
            empdept: "Finance"
        },
    ]

res.json({
  message: "Employee details fetched successfully",
  data: empdetails})
   



});
module.exports = router;