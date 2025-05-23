//'/newusersignup/register'
var resetformdata = () => {
    $("#s_accountid").val("");
    $("#s_password").val("");
    $("#s_email").val("");
    $("#s_phone").val("");  
    $("#s_dob").val("");    
    $("#signupStatusMsg").text("");}

var donewusersignup =() => {
    var userdetails = {};
    userdetails.accountid=$("#s_accountid").val();
    userdetails.password=$("#s_password").val();
    userdetails.email=$("#s_email").val();
    userdetails.mobile=$("#s_phone").val();
    userdetails.dob=$("#s_dob").val();

    axios.post('/newusersignup/register', userdetails).then((result) => {

        $("#signupStatusMsg").show();
            console.log(result);
            if (result.data.status == "Done") 
                {
                alert("User is registered successfully");
                $("#signupStatusMsg").text("User is registered successfully");
                $("#signupStatusMsg").css("color", "green");
                resetformdata();
                             
            }
            else {
                alert("User is not registered");
                $("#signupStatusMsg span").text("User is not registered");
                $("#signupStatusMsg span").css("color", "red");
            }
        })
        .catch((error)=> {
            console.log(error);
        }); 


}