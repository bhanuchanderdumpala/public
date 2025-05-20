var singleProductTemplate;

axios.get('templates/singleProductTmplt.htm').then((response) => {
    singleProductTemplate = Handlebars.compile(response.data);
})

var loadProductsToPage = () => {
    axios.get('/get/productDetails').then((result) => {
        console.log(result.data);
        var productData = result.data;
        productData.forEach((product, index) => {
            product.title = product.title.substr(0, 50);
            product.description = product.description.substr( 0, 85) + '...';
            product.index = index;
            console.log(product.description);

            $("#productDetailsContainer").append(singleProductTemplate(product));

            var ratingContainer = `#rating_${index}`;
            addRatingStarsToContainer(product.rating.rate, ratingContainer);
        });
    }).catch((err) => {
        
    });
}   