var empdetails = [
           {
            
            url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
            EmpName : "Rama",
            empSalary : '70000',
            age : "20",
            OfficeAddress :"Hyderabad"
        }, 
        
        {
            url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
            EmpName : "Rama",
            empSalary : '70000',
            age : "20",
            OfficeAddress :"Hyderabad"
        }


        ];

        var loadempdetails = (empdetails)=>
        {
            mainLi=document.createElement("li");
            olTag=document.createElement("ol");

            var li1=document.createElement("li");
            var imgTag=document.createElement("img");
            imgTag.setAttribute("src", empdetails.url); 
            imgTag.style.width = "100px";
            imgTag.style.height = "80px";
            li1.append(imgTag);
            olTag.append(li1);

                var li2=document.createElement("li");
                li2.innerText= "EmpName" + ": " + empdetails.EmpName;
                olTag.append(li2);

                var li3=document.createElement("li");
                li3.innerText= "Empsalary" + ": " + empdetails.empSalary;
                olTag.append(li3);

                var li4=document.createElement("li");
                li4.innerText= "EmpAge" + ": " + empdetails.age;
                olTag.append(li4);

                var li5=document.createElement("li");
                li5.innerText= "Emp office address" + ": " + empdetails.OfficeAddress;
                olTag.append(li5);

                mainLi.append(olTag);
                document.querySelector(".detailsContainer").append(mainLi);


        }

        for(var i=0;i<empdetails.length;i++)
        {
            loadempdetails(empdetails[i]);
        }
            