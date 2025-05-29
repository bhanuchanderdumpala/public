var validateUserCredentials = () => {
    var userData = {};
    userData.accountId = $("#userAccountId").val();
    userData.password = $("#accountPassword").val();

    
    axios.post('/validate/user/credentials', userData).then((result) => {
        console.log("success");
        console.log(result);
        if (result.data.status == 'Invalid') {
            $("#statusMsg").text('Invalid Credentials, please try again...');
        } else {
             $("#statusMsg").text('Valid credentials, please visit product details.....');
              loginModal.hide();
            loadSeletedPage('productDetails');
        }
    }).catch((err) => {
        
    });
    console.log(userData);
}

var showSignupModal = () => {
    loginModal.hide();
    signupModal.show();
}
var loginModal, signupModal;

document.addEventListener("DOMContentLoaded", () => {
    loginModal = new bootstrap.Modal(document.querySelector('#loginModal'), {});

    signupModal = new bootstrap.Modal(document.querySelector('#signupModal'), {});
})