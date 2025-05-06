var productDetails = [];

var productDetailsTemplt;

var loadProductDetails = (product, index) => {
    product.index = index;
    $(".detailsContainer").append(productDetailsTemplt(product));
    
    var ratingRefEle = '#id_' + index;
    addRatingStarsToContainer(product.rating, ratingRefEle);
}

document.addEventListener("DOMContentLoaded", () => {
    
    productDetailsTemplt = Handlebars.compile($("#product_tmplt").html());

    axios.get("/get/product/details").then((result) => {
        productDetails = result.data;
        console.log(productDetails);
        for (var i = 0 ; i < productDetails.length; i++) {
            loadProductDetails(productDetails[i], i);
        }
    }).catch((err) => {
        
    });
});


