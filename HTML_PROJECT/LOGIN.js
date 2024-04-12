
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function validateForm() {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    var loginPassword = document.getElementById("loginPassword").value;

    if (!passwordRegex.test(loginPassword)) {
        displayErrorMessage("loginError", "Password for login should have at least 8 characters, one uppercase letter, one special character, and one number.");
        return false;
    } else {
        document.getElementById("login").addEventListener("click", function () {
            window.location.href = "userinformation.html"; 
        });
    }
    
    return true;
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = message;
    errorElement.style.color = "red";
}



function validationForm() {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    var signupPassword = document.getElementById("signupPassword").value;
    // var confirmPassword = document.getElementById("confirmPassword").value;

    if (!passwordRegex.test(signupPassword)) {
        displayErrorMessage("signError", "Password for signup should have at least 8 characters, one uppercase letter, one special character, and one number.");
        return false;
    } else {
        document.getElementById("signup").addEventListener("click", function () {
            window.location.href = "userinformation.html"; 
        });
    }
    // if (signupPassword !== confirmPassword) {
    //     signError.innerHTML = "Passwords do not match";
    //     return false;
    // } else {
    //     signError.innerHTML = "";
    // }
  
    return true;
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = message;
    errorElement.style.color = "red";
}

