

var loadCenterDetails = () => {
    axios.get('https://isro.vercel.app/api/centres').then((result) => {
        console.log(result);
        var centersInfo = result.data.centres;
        loadDataToGrid(centersInfo)
        console.log(centersInfo);
    }).catch((err) => {
        
    });
}

var loadDataToGrid = (centersInfo) => {
    console.log("here");
    for (var i = 0 ; i < centersInfo.length; i++) {
        console.log("inside");
        var trtag = $("<tr/>");
        var tdTag1 = $("<td/>").text(centersInfo[i].id);
        trtag.append(tdTag1)

        var tdTag2 = $("<td/>").text(centersInfo[i].name);
        trtag.append(tdTag2)

        var tdTag3 = $("<td/>").text(centersInfo[i].Place);
        trtag.append(tdTag3)

        var tdTag4 = $("<td/>").text(centersInfo[i].State);
        trtag.append(tdTag4);

        $("tbody").append(trtag);

        console.log(trtag);
    }
}