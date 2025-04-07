var productdetails = [
           {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
            productName : "Dell Laptop",
            prices : '70000',
            manfacture : "Dell India Pvt Limited",
            rating :"4.5/5"},

            {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
            productName : "Dell Laptop",
            prices : '70000',
            manfacture : "Dell India Pvt Limited",
            rating :"4.5/5"},

            {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
            productName : "Dell Laptop",
            prices : '70000',
            manfacture : "Dell India Pvt Limited",
            rating :"4.5/5"},

            {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                productName : "Dell Laptop",
                prices : '70000',
                manfacture : "Dell India Pvt Limited",
                rating :"4.5/5"},
    
                {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                productName : "Dell Laptop",
                prices : '70000',
                manfacture : "Dell India Pvt Limited",
                rating :"4.5/5"},
    
                {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                productName : "Dell Laptop",
                prices : '70000',
                manfacture : "Dell India Pvt Limited",
                rating :"4.5/5"},

                {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                    productName : "Dell Laptop",
                    prices : '70000',
                    manfacture : "Dell India Pvt Limited",
                    rating :"4.5/5"},
        
                    {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                    productName : "Dell Laptop",
                    prices : '70000',
                    manfacture : "Dell India Pvt Limited",
                    rating :"4.5/5"},
        
                    {url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
                    productName : "Dell Laptop",
                    prices : '70000',
                    manfacture : "Dell India Pvt Limited",
                    rating :"4.5/5"},

        ]
            var loadProductdetails =(productdetails)=>{

                var mainLi=document.createElement("li");
                var olTag=document.createElement("ol");
                
                var li1=document.createElement("li");
                var imgTag=document.createElement("img");
                imgTag.setAttribute("src", productdetails.url); 
                li1.append(imgTag);
                olTag.append(li1);

                var li2=document.createElement("li");
                li2.innerText= "Product Name" + ": " + productdetails.productName;
                olTag.append(li2);

                var li3=document.createElement("li");
                li3.innerText="Product Price" + ": " + productdetails.prices;
                olTag.append(li3);

                
                var li4=document.createElement("li");
                li4.innerText="Rating" + ": " + productdetails.rating;
                olTag.append(li4);

                var li5=document.createElement("li");
                li5.innerText="Manfacture" + ": " + productdetails.manfacture;
                olTag.append(li5);

                mainLi.append(olTag);

                document.querySelector(".detailsContainer").append(mainLi);
            }


            for(var i=0;i<productdetails.length;i++)
            {
                loadProductdetails(productdetails[i]);
            }
            