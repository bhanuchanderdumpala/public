var http=require("http");

var myserver=http.createServer((request,response)=>{
console.log(request);
response.end("Hello this the response from the server_________________________");

});

myserver.listen(8082,()=>{
    console.log("Th server is started in 8082 port___________________");
});