

var getDateInFormat = () => {
    var cdate = new Date();
    var mycustomDateFormat = `${cdate.getDate()}/${cdate.getMonth()}/${cdate.getFullYear()} ${cdate.getHours()} : ${cdate.getMinutes()} : ${cdate.getSeconds()}`;
    postMessage(mycustomDateFormat);
}

setInterval(() => {
    getDateInFormat();
}, 1000);
