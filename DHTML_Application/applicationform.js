var applicationFormFields = {
    FirstName: '',
    SecondName: '',
    DOB: '',
    Address: ''
  };
  
  var LoadApplicationForm = () => {
    // Create a form container
    var formContainer = document.createElement("div");
    formContainer.className = "formContainer";
  
    // Create form title
    var title = document.createElement("h3");
    title.innerText = "Student Application Form";
    formContainer.appendChild(title);
  
    // First Name
    var firstNameLabel = document.createElement("label");
    firstNameLabel.innerText = "First Name:";
    var firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.placeholder = "Enter First Name";
    firstNameInput.id = "firstName";
    formContainer.appendChild(firstNameLabel);
    formContainer.appendChild(firstNameInput);
    formContainer.appendChild(document.createElement("br"));
  
    // Second Name
    var secondNameLabel = document.createElement("label");
    secondNameLabel.innerText = "Second Name:";
    var secondNameInput = document.createElement("input");
    secondNameInput.type = "text";
    secondNameInput.placeholder = "Enter Second Name";
    secondNameInput.id = "secondName";
    formContainer.appendChild(secondNameLabel);
    formContainer.appendChild(secondNameInput);
    formContainer.appendChild(document.createElement("br"));
  
    // DOB
    var dobLabel = document.createElement("label");
    dobLabel.innerText = "Date of Birth:";
    var dobInput = document.createElement("input");
    dobInput.type = "date";
    dobInput.id = "dob";
    formContainer.appendChild(dobLabel);
    formContainer.appendChild(dobInput);
    formContainer.appendChild(document.createElement("br"));
  
    // Address
    var addressLabel = document.createElement("label");
    addressLabel.innerText = "Address:";
    var addressInput = document.createElement("textarea");
    addressInput.placeholder = "Enter Address";
    addressInput.id = "address";
    addressInput.rows = 4;
    addressInput.cols = 30;
    formContainer.appendChild(addressLabel);
    formContainer.appendChild(addressInput);
    formContainer.appendChild(document.createElement("br"));
  
    // Submit Button
    var submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.onclick = function () {
      applicationFormFields.FirstName = document.getElementById("firstName").value;
      applicationFormFields.SecondName = document.getElementById("secondName").value;
      applicationFormFields.DOB = document.getElementById("dob").value;
      applicationFormFields.Address = document.getElementById("address").value;
  
      console.log("Form Data:", applicationFormFields);
      alert("Application submitted successfully!");
    };
    formContainer.appendChild(submitBtn);
  
    // Append the form container to the body or a specific container
    document.getElementById("formSection").appendChild(formContainer);
  };
  
  // Load the form on window load
  window.onload = LoadApplicationForm;
  