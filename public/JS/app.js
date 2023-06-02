function validatePhoneNumber() {
    var phoneNumber = document.getElementById("telephone").value;
    var phoneNumberPattern = /[0-9]{10}$/;
    var errorSpan = document.getElementById("telephoneError");
    
    if (!phoneNumberPattern.test(phoneNumber)) {
      errorSpan.textContent = "Le numéro de téléphone doit être au format ivoirien (+225xxxxxxxx).";
      console.log("Le numéro de téléphone doit être au format ivoirien (+225xxxxxxxx).");
      return false;
    } else {
      errorSpan.textContent = "";
      return true;
    }
  }
  
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    if (!validatePhoneNumber()) {
      event.preventDefault();
    }
    else{ 
        return;
    }
  });
