function validateForm(event) {
    event.preventDefault();

    var form = document.getElementById("form");
    var elements = form.elements;

    var allFilled = true;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type !== "submit" && !elements[i].value.trim()) {
            alert("Please fill out all required fields.");
            elements[i].focus(); 
            allFilled = false;
            return; 
        }
    }

    if (allFilled) {

        var highSchoolDetails = document.getElementById('highSchoolDetails');
        var examCenterDetails = document.getElementById('examCenterDetails');
        var additionalInfoDetails = document.getElementById('additionalInfoDetails');
        var declarationDetails = document.getElementById('declarationDetails');

        if (document.getElementById('check1').checked) {
            var highSchoolFields = ['board10', 'year10', 'percentage10', 'board12', 'year12', 'percentage12'];
            for (var i = 0; i < highSchoolFields.length; i++) {
                if (!document.getElementById(highSchoolFields[i]).value.trim()) {
                    alert("Please fill out all High School Details.");
                    return;
                }
            }
        }

        // Check for Exam Center Details
        if (document.getElementById('check2').checked) {
            var examCenterFields = ['preferredCity', 'secondChoiceCity', 'thirdChoiceCity'];
            for (var i = 0; i < examCenterFields.length; i++) {
                if (!document.getElementById(examCenterFields[i]).value.trim()) {
                    alert("Please fill out all Exam Center Details.");
                    return;
                }
            }
        }

        // Check for Additional Info Details
        if (document.getElementById('additionalInfoCheckbox').checked) {
            var additionalInfoFields = ['modeOfExamination', 'choiceOfPaper', 'choiceOfEngineering'];
            for (var i = 0; i < additionalInfoFields.length; i++) {
                if (!document.getElementById(additionalInfoFields[i]).value.trim()) {
                    alert("Please fill out all Additional Info Details.");
                    return;
                }
            }
        }

        // Check for Declaration Details
        if (document.getElementById('declarationCheckbox').checked) {
            var declarationFields = ['authenticity1', 'termsConsent1'];
            for (var i = 0; i < declarationFields.length; i++) {
                if (!document.getElementById(declarationFields[i]).value.trim()) {
                    alert("Please fill out all Declaration Details.");
                    return;
                }
            }
        }

        // If all conditions are met, proceed to the next page
        if (allFilled) {
            showPaymentPage();
        }
    }
}


function HighSchoolDetails() {
    var highSchoolDetails = document.getElementById('highSchoolDetails');
    var check1 = document.getElementById('check1');

    if (check1.checked) {
        highSchoolDetails.style.display = 'block';
    } else {
        highSchoolDetails.style.display = 'none';
        document.getElementById('board10').value = '';
        document.getElementById('year10').value = '';
        document.getElementById('percentage10').value = '';
        document.getElementById('board12').value = '';
        document.getElementById('year12').value = '';
        document.getElementById('percentage12').value = '';
    }
}
function hideHighSchoolDetails() {
    var highSchoolDetails = document.getElementById('highSchoolDetails');
    var check1 = document.getElementById('check1');

    check1.checked = false;
    highSchoolDetails.style.display = 'none';
    document.getElementById('board10').value = '';
    document.getElementById('year10').value = '';
    document.getElementById('percentage10').value = '';
    document.getElementById('board12').value = '';
    document.getElementById('year12').value = '';
    document.getElementById('percentage12').value = '';
}
function ExamCenterDetails() {
    var highSchoolDetails = document.getElementById('highSchoolDetails');
    var examCenterDetails = document.getElementById('examCenterDetails');
    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');

    if (check2.checked) {
        examCenterDetails.style.display = 'block';
        check1.checked = false;
    } else {
        examCenterDetails.style.display = 'none';
    }
}
function HighSchoolDetails() {
    var highSchoolDetails = document.getElementById('highSchoolDetails');
    highSchoolDetails.style.display = document.getElementById('check1').checked ? 'block' : 'none';
}

function AdditionalInfo() {
    var additionalInfoDetails = document.getElementById('additionalInfoDetails');
    additionalInfoDetails.style.display = document.getElementById('additionalInfoCheckbox').checked ? 'block' : 'none';
}


// color changer
document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};
let themebutton = document.querySelectorAll('.theme-btn');
themebutton.forEach(color => {
    color.addEventListener('click', () => {
        let datacolor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', datacolor)
    });
});

function showPaymentPage() {
   
    window.location.href = "pop.html"; 
  }
  document.getElementById("submit").addEventListener("click", () => {
    validateForm(event);
    if (!event.defaultPrevented) { 
        showPaymentPage();
    }
  });

  function Declaration() {
    var declarationCheckbox = document.getElementById("declarationCheckbox");
    var declarationDetails = document.getElementById("declarationDetails");

    if (declarationCheckbox.checked) {
        declarationDetails.style.display = "block";
    } else {
        declarationDetails.style.display = "none";
    }
}
document.getElementById("declarationCheckbox").addEventListener("change", Declaration);

