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

var loadProductDetails = (product, index) => {
    var mainLi = $("<li/>");
    var olTag = $("<ol/>");
    
    var li1 = $("<li/>");
    var imgTag = $("<img/>").attr("src", product.url);
    li1.append(imgTag);
    olTag.append(li1);

    var li2 = $("<li/>").text( "Product Name : " + product.name);
    olTag.append(li2);

    var li3 = $("<li/>").text ("Product Price : " + product.price);
    olTag.append(li3);

    var li4 = $("<li/>").text( "Manufacturer : " + product.manufacturer);
    olTag.append(li4);

    var li5 = $("<li/>").attr("id", 'id_' + index).addClass('ratingContainer');
   
    olTag.append(li5);
    mainLi.append(olTag);

    $(".detailsContainer").append(mainLi);

    var ratingRefEle = '#id_' + index;
    addRatingStarsToContainer(product.rating, ratingRefEle);
}


for (var i = 0 ; i < productDetails.length; i++) {
    loadProductDetails(productDetails[i], i);
}
