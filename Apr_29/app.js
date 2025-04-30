
document.addEventListener("DOMContentLoaded", () => {

    var uname = sessionStorage.getItem("user_name");
    if (uname != null) {
      showWelcomemsg(uname)
    }

    var selectedTheme = sessionStorage.getItem("selectedTheme");
    applySelectedTheme(selectedTheme)
})

var saveUserDetails = () => {
    var username = document.querySelector("#username").value;
    sessionStorage.setItem('user_name',username )
    showWelcomemsg(username);
}

var showWelcomemsg = (uname) => {
    setTimeout(() => {
        var msg = `Thanks for visiting our page Mr. ${uname}`;
        document.querySelector("#thanksBlock").innerText = msg;
        document.querySelector("#thanksBlock").style.display = 'block';
    }, 3000);
}

var applyTheme = () => {
    var selectedTheme = document.querySelector("#themename").value;
    sessionStorage.setItem('selectedTheme', selectedTheme)
    applySelectedTheme(selectedTheme);
}

 var applySelectedTheme = (tname) => {
    document.querySelector("body").style.background = tname;
 }


 // setItem()
 // getItem()
 // removeItem()
 //removeAll()