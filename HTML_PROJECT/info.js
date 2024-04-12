
function validateLogin() {
    // Get form elements
    var fullName = document.getElementById('fullName').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var nationality = document.getElementById('nationality').value;
    var aadharCard = document.getElementById('aadharCard').value;
    var category = document.getElementById('category').value;

    // Perform basic validation
    if (fullName.trim() === '') {
        document.getElementById("usererror").innerHTML = "Please Enter user name";
        return;
    }
    if (dob.trim() === '') {
        alert('Please enter your Date of Birth.');
        return;
    }

    if (gender === '') {
        alert('Please select your Gender.');
        return;
    }

    if (nationality === '') {
        alert('Please select your Nationality.');
        return;
    }

    if (aadharCard.trim() === '') {
        alert('Please enter your Aadhar Card Number.');
        return;
    }

    if (category === '') {
        alert('Please select your Category.');
        return;
    }

    // If all validations pass, you can proceed with further logic or form submission
    alert('Form validated successfully. You can proceed with login.');
}

        document.getElementById("submit").addEventListener("click", function() {
    window.location.href = "ACADEMIC_DETAILS.html"; // Replace with the target page's URL
  });
    