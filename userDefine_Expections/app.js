var userDetails = {};
var saveUserDetails = () => {
    userDetails.name = $("#sname").val();
    userDetails.name = userDetails.name.trim();
    userDetails.age = parseInt($("#sage").val());
    userDetails.mailId = $("#mailid").val();

    // if (userDetails.name == '') {
    //     $("#nameErr").show();
    // } else {
    //     $("#nameErr").hide();
    // }
    // console.log(userDetails);
    // if (userDetails.age < 21) {
    //     $("#ageErr").show();
    // } else {
    //     $("#ageErr").hide();
    // }

    try {
        if (userDetails.name == '') {
            throw 'Name Error';
            // throws
        } else {
            $("#nameErr").hide();
        }
        if (userDetails.age < 21) { 
            throw 'Age Error';
        } else {
            $("#ageErr").hide();
        }

    } catch(err) {
        if (err == 'Name Error') {
            $("#nameErr").show();
        } else {
            $("#ageErr").show();
        }
        
        
    }
}