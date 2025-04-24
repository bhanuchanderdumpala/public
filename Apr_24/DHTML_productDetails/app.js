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
    
});


var getProductDetails = () => {
    $(".loadingBlock").show(200);
    $(".errorBlock").hide();
    axios.get("/get/product/details").then((result) => {
        $(".loadingBlock").hide(200);
        productDetails = result.data;
        console.log(productDetails);
        for (var i = 0 ; i < productDetails.length; i++) {
            loadProductDetails(productDetails[i], i);
        }
    }).catch((err) => {
        $(".errorBlock").show();
        $(".loadingBlock").hide(200);
    });
}