
document.addEventListener("DOMContentLoaded", () => {

    var myworker = new Worker('myworker.js');
    myworker.onmessage = (event) => {
        console.log("received");
        console.log(event.data);
        addDateToPage(event.data)
    }

    var count = 1;
    setInterval(() => {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", 'block');
        divTag.innerHTML = 'Block ' + count;
        document.querySelector("#mainContainer").append(divTag);
        count++;
    }, 1000);
    showCurrentDate();
});

var showCurrentDate = () => {
    var date = new Date();
    addDateToPage(date);
}

var addDateToPage = (date) => {
    document.querySelector(".dateContainer span").innerHTML = date;
}