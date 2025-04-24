var count = 0;

var dooperation = (type) => {
  
    count++;
    var data = {};
    data.fval = document.querySelector("#fval").value;
    data.sval = document.querySelector("#sval").value;

    switch(type) {
        case 'mul':
            var result = getMultiplication(data);
            showResult(result, type);
            break;
        case 'add':
            var result = mathUtils.getAdditionOfValues(data);
            showResult(result, type);
            break;
        case 'div':
            var result = mathUtils.getDivision(data);
                showResult(result, type);
            break;
        case 'sub':
            var result = mathUtils.getSubstraction(data);
            showResult(result, type);
            break;
    }

 
    
}

var showResult = (res, type) => {
    var msg = 'The ' + type + ' of two numnbers is ' + res;
    document.querySelector("#rblock").innerHTML = msg;
}

var getCount = () => {
    document.querySelector("#countBlock").innerText = 'User used the operations for ' + count + ' No. times';
}

//jQuery, $, Handlebars.compile()