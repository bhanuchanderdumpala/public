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

var loadProductDetails = (product) => {
    var mainLi = document.createElement("li");
    var olTag = document.createElement('ol');
    
    var li1 = document.createElement('li');
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", product.url);
    li1.append(imgTag);
    olTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "Product Name : " + product.name;
    olTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "Product Price : " + product.price;
    olTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = "Manufacturer : " + product.manufacturer;
    olTag.append(li4);

    var li5 = document.createElement("li");
    li5.innerText = "Rating : " + product.rating;
    olTag.append(li5);
    mainLi.append(olTag);

    document.querySelector(".detailsContainer").append(mainLi);
}


for (var i = 0 ; i < productDetails.length; i++) {
    loadProductDetails(productDetails[i]);
}
