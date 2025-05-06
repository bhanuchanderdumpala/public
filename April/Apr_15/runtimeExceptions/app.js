
var userName;// document.querySelector("#username").value
var showTodayTask = () => {
    var taskList = [
        'Do the development of Login page module',
        'Do the code review process',
        'Finish the login page module development',
        'Fix the issue - JIRA - 23405',
        'Do the KT for all the new modules been developed'
    ]
    var randomIndex = Math.floor(Math.random() * taskList.length);
    var taskName = taskList[randomIndex];
    try {
        document.querySelector("#taskContainerBlock").innerText = 'Hello Mr.' + userName + ' todays task is ' +  taskName;
    } catch(err) {
       alert("u missed to create task container, please try again..") 
    } finally{
        showThanksMsg();
    }

    
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