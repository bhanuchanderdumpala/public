var userDetails = {};

var readUserDeatails = () => {
    userDetails.name = document.querySelector("#userName").value;
    userDetails.age = document.querySelector("#age").value;
    userDetails.password = document.querySelector("#accountPwd").value;
    userDetails.countryName = document.querySelector("#countryname").value;
    userDetails.gender = document.querySelector('input[name=gender]:checked').value;

    if (userDetails.name == '') {
        document.querySelector("#nameErr").style.display = 'block';
        return;
    } else {
        document.querySelector("#nameErr").style.display = 'none';
    }

    if (userDetails.age == '') {
        document.querySelector("#ageErr").style.display = 'block';
        return;
    } else {
        document.querySelector("#ageErr").style.display = 'none';
    }

    console.log(userDetails)

}

var validateData = (event) => {
    console.log(event);
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return false;
    } else {
        return true;
    }
}   

var validatePassword = (event) => {
    var totalChar = document.querySelector("#accountPwd").value;
    if (totalChar.length >= 8) {
        document.querySelector('#maxCharValidation').setAttribute('class', 'validContent')
    } else {
        document.querySelector('#maxCharValidation').removeAttribute('class');
    }

    var asciivalue = totalChar.charCodeAt(0);
    console.log(asciivalue);
    if (asciivalue >= 65 && asciivalue<= 90) {
        document.querySelector('#firtCharUprCase').setAttribute('class', 'validContent');        
    } else {
        document.querySelector('#firtCharUprCase').removeAttribute('class');        
    }

    var specialCharCount = checkforSpecialSymbols(totalChar);
    if (specialCharCount >= 1 && specialCharCount <= 2) {
        document.querySelector('#specialSymCase').setAttribute('class', 'validContent'); 
    } else {
        document.querySelector('#specialSymCase').removeAttribute('class'); 
    }

    var splnumberCount = checkforSpecialNumber(totalChar);
    if (splnumberCount >= 1 && splnumberCount <= 2) {
        document.querySelector('#minonedigitmax2digits').setAttribute('class', 'validContent'); 
    } else {
        document.querySelector('#specialSymCase').removeAttribute('class'); 
    }




}

var togglePwd = () => {
    var currentType = document.querySelector("#accountPwd").getAttribute("type");
    if (currentType == 'text') {
        document.querySelector("#accountPwd").setAttribute('type', 'password');
    } else {
        document.querySelector("#accountPwd").setAttribute('type', 'text');
    }
}

var checkforSpecialSymbols = (msg) => {
    var count = 0;
    var text = msg.split('');
    for (var i = 0 ; i < text.length; i++) {
        if (text[i] == '$' || text[i] == '#' || text[i] == '^') {
            count++;
        }
    }
    return count;
}

var checkforSpecialNumber = (msg) => {
    var count = 0;
    var text = msg.split('');
    for (var i = 0 ; i < text.length; i++) {
        if (text[i] == '0' || text[i] == '1' || text[i] == '2'|| text[i] == '3' || text[i] == '4' || text[i] == '5'|| text[i] == '6' || text[i] == '7' || text[i] == '8') {
            count++;
        }
    }
    return count;
}

