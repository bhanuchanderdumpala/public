

document.addEventListener("DOMContentLoaded", () => {
    addCapthcaText();

    loadSeletedPage('onload');
});



var loadSeletedPage = (pageType) => {
    var templateUrl = '';
    switch(pageType) {
        case 'onload':
            templateUrl = 'templates/onload.htm';           
            break;
        case 'productDetails':
            templateUrl = 'templates/productDetails.htm';
            break;
    }
    axios.get(templateUrl).then((response) => {
        $('main').html(response.data);

        if (pageType == 'productDetails') {
            loadProductsToPage();
        }
    });
}

