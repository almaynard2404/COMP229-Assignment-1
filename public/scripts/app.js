"use strict";


//ensures that all fields are not null and tells the user that all fields must be entered
function mandatoryFields() {
    if (document.getElementById("fname").value == "" || 
    document.getElementById("lname").value == "" || 
    document.getElementById("address").value == "" || 
    document.getElementById("city").value == "" || 
    document.getElementById("postal_code").value == "" || 
    document.getElementById("province").value == "" || 
    document.getElementById("age").value == "" || 
    document.getElementById("password").value == "" || 
    document.getElementById("confirm_password").value == "" || 
    document.getElementById("email").value == "") {
        //Message tells the user to enter in all fields to be able to submit page
        //error handling
        document.getElementById("all_fields_error").textContent = "***All fields are mandatory. Please enter all fields***";
        
        //checks if fields are null again. If so it highlights the area with red coloring to show user to enter data into the fields:
        //firstname. lastname, address and city. The other input areas have their own handlers for color. After the text area is filled in the
        //browswer handles giving back the white coloring for no errors.
        if(document.getElementById("fname").value == "")
        {
            document.getElementById("fname").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("lname").value == "")
        {
            document.getElementById("lname").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("address").value == "")
        {
            document.getElementById("address").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("city").value == "")
        {
            document.getElementById("city").style.backgroundColor = "#FFDCD1"
        }
        //function returns false to state there are errors for this particular check
        return 0;
    }
    else {
        //changes text back when there are not eerors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("all_fields_error").textContent = "";
        return 1;
    }
}


//checks if postal code matches the regular expression and passes validation
function checkPostalCode() {
    var postalCodeFormat = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z]( |)[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;
    
    if(postalCodeFormat.test(document.getElementById("postal_code").value) == false) {
        //error handling
        document.getElementById("postal_code_error").textContent = "Postal Code must be in Canadian a0a0a0 format";
        document.getElementById("postal_code").style.backgroundColor = "#FFDCD1";
        //function returns false to state there are errors for this particular check
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("postal_code_error").textContent = "";
        document.getElementById("postal_code").style.backgroundColor = "white";
        
        return 1;
    }
}

//checks if province matches the regular expression and passes validation
function checkProvince() {  
    var provinceFormat = /^(?:QC|ON|MN|SK|AB|BC)$/;
    
    if (provinceFormat.test(document.getElementById("province").value) == false) {
        //error handling
        document.getElementById("province_error").textContent = "Province must be one of the following:'QC', 'ON', 'MN', 'SK', 'AB', 'BC'";
        document.getElementById("province").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("province_error").textContent = "";
        document.getElementById("province").style.backgroundColor = "white";
        return 1;
    }
}

//checks if age matches specificatinos of the regular expression (between 18 and 200 inclusive) and passes validation
function checkAdult() {
    //Ages 18-200 should be sufficient, the oldest person ever recorded was Jeanne Calment at 122 years and 164 days: 
    //https://www.google.com/search?q=oldest+person+ever&rlz=1C1FHFK_enCA930CA930&sxsrf=ALiCzsYrbVoMaVAao7vheETaW6NRidNT5Q%3A1657764244492&ei=lHnPYv3iHfmgptQPhvifqAo&ved=0ahUKEwj9_KeHpff4AhV5kIkEHQb8B6UQ4dUDCA4&uact=5&oq=oldest+person+ever&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMgoIABCABBCHAhAUMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6DAguEMgDELADEEMYAjoECAAQQzoICAAQgAQQsQM6CAguELEDEJECOgUIABCRAkoECEEYAEoECEYYAVDsBVjxGWD-HGgBcAF4AIABhgGIAZ0NkgEDNy45mAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz
    var ageFormat = /^([1-9][8-9]|[2-9][0-9]|[1][0-9][0-9]|200)$/;

    if (ageFormat.test(document.getElementById("age").value) == false) {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("age_error").textContent = "You must be ages 18-200";
        document.getElementById("age").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("age_error").textContent = "";
        document.getElementById("age").style.backgroundColor = "white";
        return 1;
    }
}

//checks if email matches the regular expression and passes validation
function checkEmail() {
    var emailFormat = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,10})$/;

    if (emailFormat.test(document.getElementById("email").value) == false) {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("email_error").textContent = "Email must be in the proper someone@something.domain format";
        document.getElementById("email").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("email_error").textContent = "";
        document.getElementById("email").style.backgroundColor = "white";
        return 1;
    }
}

//checks if the passsword and confirm passwords match
function checkPasswordsMatch() {
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm_password").value;
    if (password != confirm)
    {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("confirm_password_error").textContent = "Passwords must match";
        document.getElementById("confirm_password").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else if (password == confirm) {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("confirm_password_error").textContent = "";
        document.getElementById("confirm_password").style.backgroundColor = "white";
        return 1;
    }
}

//checks if province matches the regular expression and passes validation
function validatePassword() {
    var passwordFormat = /(?=.*[A-Z])(?=.*\d).{6,}/;

    if (passwordFormat.test(document.getElementById("password").value) == false) {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("password_error").textContent = "Your password must be at least 6 characters, must contain one digit and must contain at least one upper-case";
        document.getElementById("password").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("password_error").textContent = "";
        document.getElementById("password").style.backgroundColor = "white";
        return 1;
    }
}


//calls all functions and checks whether they ALL return 1 (true). If so they all pass validation and the form submits
//and sends a Confirmation/Thank-you message to the user.  
function passedValidation()
{
    if (mandatoryFields() == 1 && 
    checkPostalCode() == 1 && 
    checkProvince() == 1 && 
    checkAdult() == 1 && 
    checkEmail() == 1 && 
    checkPasswordsMatch() == 1 && 
    validatePassword() == 1) {
        document.getElementById("form").submit();
        alert("Thanks for registering with our website, your member registration was created successfully.");
    }
    else {
        //if some calls do do not match validaion, else calls the functions and checks which validations are right or wrong.
        mandatoryFields();
        checkPostalCode();
        checkProvince();
        checkAdult();
        checkEmail(); 
        checkPasswordsMatch();
        validatePassword();
    }
}


//clears the form, resets the color and clears all the text when the user wants to reset the form.
function clearForm() {
    document.getElementById("form").reset();
    document.getElementsByTagName("input")[0].style.backgroundColor = "white";
    document.getElementsByTagName("input")[1].style.backgroundColor = "white";
    document.getElementsByTagName("input")[2].style.backgroundColor = "white";
    document.getElementsByTagName("input")[3].style.backgroundColor = "white";
    document.getElementsByTagName("input")[4].style.backgroundColor = "white";
    document.getElementsByTagName("input")[5].style.backgroundColor = "white";
    document.getElementsByTagName("input")[6].style.backgroundColor = "white";
    document.getElementsByTagName("input")[7].style.backgroundColor = "white";
    document.getElementsByTagName("input")[8].style.backgroundColor = "white";
    document.getElementsByTagName("input")[9].style.backgroundColor = "white";
    

    document.getElementsByTagName("p")[0].textContent = "";
    document.getElementsByTagName("p")[1].textContent = "";
    document.getElementsByTagName("p")[2].textContent = "";
    document.getElementsByTagName("p")[3].textContent = "";
    document.getElementsByTagName("p")[4].textContent = "";
    document.getElementsByTagName("p")[5].textContent = "";
    document.getElementsByTagName("p")[6].textContent = "";
    document.getElementsByTagName("p")[7].textContent = "";
    document.getElementsByTagName("p")[8].textContent = "";
    document.getElementsByTagName("p")[9].textContent = "";
    document.getElementsByTagName("p")[10].textContent = "";
}


//backwards compatible event handlers
var submit = document.getElementById("register");
var clear = document.getElementById("clear");
if (window.addEventListener) {
    submit.addEventListener("click", passedValidation, false);
    clear.addEventListener("click", clearForm, false);
} 
else if (window.attachEvent)  {
    submit.attachEvent("onclick", passedValidation);
    clear.attachEvent("onclick", clearForm);
}