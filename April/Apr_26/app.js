var getProductDetails = () => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
        console.log(result.data);
        loadProductDetails(result.data);
    }).catch((err) => {
        
    });
}
var productTemplate;
document.addEventListener("DOMContentLoaded", () => {
    productTemplate = Handlebars.compile($("#ptemplate").html());
})


var loadProductDetails = (pdata) => {
    setTimeout(() => {
        pdata.forEach((product) => {
            $("#productDetailscontainer").append(productTemplate(product));
        });
    }, 5000);
   
}

for(let i = 0 ; i < 10; i++) {
    setTimeout(() => {
        console.log('i ' + i);
    }, 5000)
}