
function validateFatherName() {
    const input = document.getElementById('txtFatherName');
    let value = input.value;
    // Remove any characters that are not letters or spaces
    value = value.replace(/[^a-zA-Z\s]/g, '');
    // Capitalize the first letter of each word
    value = value.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
    input.value = value;
}

function validateMotherName() {
    const input = document.getElementById('txtMotherName');
    let value = input.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    value = value.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
    input.value = value;
}

function validateAndFormatFullName() {
    const input = document.getElementById('txtFullName');
    let value = input.value;
    // Remove any characters that are not letters or spaces
    value = value.replace(/[^a-zA-Z\s]/g, '');
    // Capitalize the first letter of each word
    value = value.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
    input.value = value;
}

function validateGenderSelection() {
    var maleRadio = document.getElementById('radioMale');
    var femaleRadio = document.getElementById('radioFemale');
    if (!maleRadio.checked && !femaleRadio.checked) {
        alert('Please select a gender.');
        return false;
    }
    return true;
}


function copyAddress() {
    if (document.getElementById('cbxAddress').checked) {
        document.getElementById('txtP_FlatNo').value = document.getElementById('txtFlatNo').value;
        document.getElementById('txtP_Street').value = document.getElementById('txtStreet').value;
        document.getElementById('txtP_City_or_Village').value = document.getElementById('txtCity_or_Village').value;
        document.getElementById('txtP_District').value = document.getElementById('txtDistrict').value;
        document.getElementById('txtP_selectState').value = document.getElementById('txtselectState').value;
        document.getElementById('txtP_PinCode').value = document.getElementById('txtPinCode').value;
        document.getElementById('txtP_Country').value = document.getElementById('txtCountry').value;
    } else {
        document.getElementById('txtP_FlatNo').value = "";
        document.getElementById('txtP_Street').value = "";
        document.getElementById('txtP_City_or_Village').value = "";
        document.getElementById('txtP_District').value = "";
        document.getElementById('txtP_State').value = "";
        document.getElementById('txtP_PinCode').value = "";
        document.getElementById('txtP_Country').value = "";
    }
}

function validateForm() {
    validateAndFormatFullName();
    validateMotherName();
    validateFatherName();

    const FullName = document.getElementById("txtFullName").value;
    const FatherName = document.getElementById("txtFatherName").value;
    const MotherName = document.getElementById("txtMotherName").value;
    const OptionGender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const DateOfBirth = document.getElementById("txtDOB").value;
    const Email = document.getElementById("txtEmail").value;
    const Phone = document.getElementById("txtPhone").value;


    // ............Address..............................
    const FlatNo = document.getElementById("txtFlatNo").value;
    const Street = document.getElementById("txtStreet").value;
    const City_or_Village = document.getElementById("txtCity_or_Village").value;
    const District = document.getElementById("txtDistrict").value;
    const State = document.getElementById("txtselectState").value;
    const PinCode = document.getElementById("txtPinCode").value;
    const Country = document.getElementById("txtCountry").value;

    const P_FlatNo = document.getElementById("txtP_FlatNo").value;
    const P_Street = document.getElementById("txtP_Street").value;
    const P_City_or_Village = document.getElementById("txtP_City_or_Village").value;
    const P_District = document.getElementById("txtP_District").value;
    const P_State = document.getElementById("txtP_selectState").value;
    const P_PinCode = document.getElementById("txtP_PinCode").value;
    const P_Country = document.getElementById("txtP_Country").value;

    if (FullName === "") {
        alert("Enter Full Name");
        return false;
    }

    if (OptionGender === "") {
        alert("Please select a gender.");
        return false;
    }

    if (Email === "") {
        alert("Enter Email");
        return false;
    }
    if (!isValidEmail(Email)) {
        alert("Enter a valid email address.");
        return false;
    }

    if (Phone === "") {
        alert("Enter Phone Number");
        return false;
    }
    if (Phone.length !== 10) {
        alert("Phone number should be exactly 10 digits.");
        return false;
    }
    if (isNaN(Phone)) {
        alert("Only numbers are allowed for Phone.");
        return false;
    }

    if (State === "0") {
        alert("Please select State");
        return false;
    }
    if (City_or_Village === "0") {
        alert("Please select City");
        return false;
    }


    if (PinCode === "") {
        alert("Enter Pin code");
        return false;
    }

    if (P_State === "0") {
        alert("Please select State");
        return false;
    }
    if (P_City_or_Village === "0") {
        alert("Please select City");
        return false;
    }


    if (P_PinCode === "") {
        alert("Enter Pin code");
        return false;
    }

    window.location.href = 'Academic.html';
    return true;
}
