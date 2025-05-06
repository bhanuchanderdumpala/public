var productDetails = [
    {
        url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full',
        price: 24000,
        name: 'Standard Laptop',
        manufacturer: 'Sony',
        rating: '3.5/5'                
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mUg0gqaHwIkBVsJ23EbbJ5zuB7pdFn3EIg&s',
        price: 13009,
        name: 'Smart Phone',
        manufacturer: 'Apple',
        rating: '4.5/5'                
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSayeQYlSHIfCbMI2om2NRMwrqMgN6_cXug&s',
        price: 13000,
        name: 'Scandisk pendrive',
        manufacturer: 'Sandisk',
        rating: '2.5/5'                
    },
    {
        url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full',
        price: 24000,
        name: 'Standard Laptop',
        manufacturer: 'Sony',
        rating: '3.5/5'                
    },
    {
        url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full',
        price: 24000,
        name: 'Standard Laptop',
        manufacturer: 'Sony',
        rating: '3.5/5'                
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mUg0gqaHwIkBVsJ23EbbJ5zuB7pdFn3EIg&s',
        price: 13009,
        name: 'Smart Phone',
        manufacturer: 'Apple',
        rating: '4.5/5'                
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSayeQYlSHIfCbMI2om2NRMwrqMgN6_cXug&s',
        price: 13000,
        name: 'Scandisk pendrive',
        manufacturer: 'Sandisk',
        rating: '2.5/5'                
    },
    {
        url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full',
        price: 24000,
        name: 'Standard Laptop',
        manufacturer: 'Sony',
        rating: '3.5/5'                
    }
];

var productDetailsTemplt;

var loadProductDetails = (product, index) => {
    product.index = index;
    $(".detailsContainer").append(productDetailsTemplt(product));
    
    var ratingRefEle = '#id_' + index;
    addRatingStarsToContainer(product.rating, ratingRefEle);
}

document.addEventListener("DOMContentLoaded", () => {
    productDetailsTemplt = Handlebars.compile($("#product_tmplt").html());
    for (var i = 0 ; i < productDetails.length; i++) {
        loadProductDetails(productDetails[i], i);
    }
});


