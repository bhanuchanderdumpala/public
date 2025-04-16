
var userName;// document.querySelector("#username").value
var showTodayTask = () => {
    var taskName = 'Do the development of Login page module';
    document.querySelector("#taskContainerBlock").innerText = 'Hello Mr.' + userName + ' todays task is ' +  taskName;

    showThanksMsg();
}

var createTaskContainer = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", 'taskContainerBlock');
    document.querySelector("#container").append(divTag);

}


var saveUserName = () => {
    userName = $("#userName").val(); 
    $("#userName").val('');
}


var showThanksMsg = () => {
    setTimeout(() => {
        $("#thanksBlock").text("Thanks for using our page...")
        $("#thanksBlock").show(1000);
    }, 3000);
    
}