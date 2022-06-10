
// FUNCTION FOR TAKING DATA FROM INPUT
function getIdValue(id,type){
    if ( type == "text" ){
        value = document.getElementById(id).value;
    }
    else if ( type == "password" ){
        value = document.getElementById(id).value;
    }
    else if ( type == "checkbox" ){
        value = document.getElementById(id).checked;
    }
    else {
        value = document.getElementById(id).selectedIndex;
    }
    return value;
}


// FUNCTION FOR NOT TAKING ONLY SPACE FIELD WITHOUT DATA
function trim(value){
    value = value.trim();
    return value;
}


// FUNCTION FOR E-MAIL VALIDATION
function emailValidator(value){
    if ( value.match(/@/) && value.slice(-11) == "@khanit.com" /* ||value.slice(-4,-3) == "." || value.slice(-3,-2) == "."*/){
        return true;
    }
    else {
        return false;
    }
}


// FUNCTION FOR CONTACT NO VALIDATION
function contactValidator(value){
    if ( value.match(/[0-9]/) && value.length == 14 && value.match(/[+]/) && value.slice(1,2) == "8" ){
        return true;
    }
    else {
        return false;
    }
}


// FUNCTION FOR PASSWORD VALIDATION
function passwordValidator(value){
    if ( value.match(/[A-Z]/) && value.match(/[a-z]/) && value.match(/[0-9]/) && value.match(/[!@$%^&*()-+]/)){
        document.getElementById('epwd').style.color ="green";
        document.getElementById('epwd').style.background ="white";
        return "Strong Password";
    }
    else if ( value.match(/[A-Z]/) && value.match(/[a-z]/) && value.match(/[0-9]/)){
        document.getElementById('epwd').style.color ="yellow";
        document.getElementById('epwd').style.background ="blue";
        return "Medium Password";
    }
    else if ( value.match(/[A-Z]/) && value.match(/[a-z]/) || value.match(/[0-9]/) && value.match(/[A-Z]/) || value.match(/[a-z]/) &&  value.match(/[0-9]/) ){
        document.getElementById('epwd').style.color ="orange";
        document.getElementById('epwd').style.background ="white";
        return "Normal Password";   
    }
    else {
        document.getElementById('epwd').style.color ="red";
        document.getElementById('epwd').style.background ="white";
        return "Weak Password";
    }
}


// FUNCTION FOR SHOWING & HIDING PASSWORD
function toggle(){
    var temp = document.getElementById('pwd');
    var tempt = document.getElementById('rpwd');
    if ( temp.type == "password" && tempt.type == "password" ){
        temp.type = "text";
        tempt.type = "text";
    }
    else {
        temp.type = "password";
        tempt.type = "password";
    }
}


// FUNCTION FOR IMAGE VALIDATION
function imageValidator(value){
    if ( value.slice(-4) == ".jpg" || value.slice(-4)== ".png" || value.slice(-5) == ".jpeg"){
        return true;
    }
    else{
        return false;
    }
}


// FUNCTION FOR COMMENT
function commentFnameOver(id){
    document.getElementById('comment1').innerHTML = "Enter Your First Name";
}
function commentFnameOut(id){
    document.getElementById('comment1').innerHTML = "";
}

// FUNCTION FOR FORM VALIDATION
function validation(){

// FUNCTION FOR TAKING DATA FROM INPUT
// trim is used for not taking only space from input without data
    first_name = trim(getIdValue('fname','text'));
    last_name = trim(getIdValue('lname','text'));
    email = trim(getIdValue('email','text'));
    contact_no = trim(getIdValue('mobile','text'));
    password = trim(getIdValue('pwd','password'));
    confirm_password = trim(getIdValue('rpwd','password'));
    gender_male = getIdValue('gender_male','checkbox');
    gender_female = getIdValue('gender_female','checkbox');
    gender_prefer = getIdValue('gender_prefer','checkbox');
    birth_year = getIdValue('birth_year','selectBox');
    image = trim(getIdValue('img','text'));

// FUNCTION FOR ERROR 
    var error = 0;

    // FIRST NAME
    if ( first_name == "" ){
        error = error + 1;
        document.getElementById('fname').style.border = "2px solid red";
        document.getElementById('er1').style.visibility = "visible";
        document.getElementById('su1').style.visibility = "hidden";
    }
    else{
        document.getElementById('fname').style.border = "2px solid green";
        document.getElementById('su1').style.visibility = "visible";
        document.getElementById('er1').style.visibility = "hidden";
    }

    // LAST NAME
    if ( last_name == "" ){
        error = error + 1;
        document.getElementById('lname').style.border = "2px solid red";
        document.getElementById('er2').style.visibility = "visible";
        document.getElementById('su2').style.visibility = "hidden";
    }
    else{
        document.getElementById('lname').style.border = "2px solid green";
        document.getElementById('su2').style.visibility = "visible";
        document.getElementById('er2').style.visibility = "hidden";
    }

    // E-MAIL
    if ( email == "" || emailValidator(email) == false ){
        error = error + 1;
     //   alert("invaild email")
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('er3').style.visibility = "visible";
        document.getElementById('su3').style.visibility = "hidden";
    }
    else{
     //   alert("Vaild Email");
     //   alert("Thanks");
        document.getElementById('email').style.border = "2px solid green";
        document.getElementById('su3').style.visibility = "visible";
        document.getElementById('er3').style.visibility = "hidden";
    }

    // CONTACT NO
    if ( contact_no == "" || contactValidator(contact_no) == false ){
        error = error + 1;
     //   alert("invaild no");
        document.getElementById('mobile').style.border = "2px solid red";
        document.getElementById('er4').style.visibility = "visible";
        document.getElementById('su4').style.visibility = "hidden";
    }
    else{
     //   alert("vaild no");
        document.getElementById('mobile').style.border = "2px solid green";
        document.getElementById('su4').style.visibility = "visible";
        document.getElementById('er4').style.visibility = "hidden";
    }


    // PASSWORD
    if ( password == ""){
        error = error + 1;
        document.getElementById('pwd').style.border = "2px solid red";
        document.getElementById('er5').style.visibility = "visible";
        document.getElementById('su5').style.visibility = "hidden";
     //   alert("blank");
    }
    else{
        document.getElementById('pwd').style.border = "2px solid green";
        document.getElementById('su5').style.visibility = "visible";
        document.getElementById('er5').style.visibility = "hidden";
        document.getElementById('epwd').innerHTML = passwordValidator(password);
    }

    // CONFIRM PASSWORD 
    if ( confirm_password != password){
        document.getElementById('rpwd').style.border = "2px solid red";
        document.getElementById('er6').style.visibility = "visible";
        document.getElementById('su6').style.visibility = "hidden";
    }
    else if ( confirm_password == "" ){
        error = error + 1;
        document.getElementById('rpwd').style.border = "2px solid red";
        document.getElementById('er6').style.visibility = "visible";
        document.getElementById('su6').style.visibility = "hidden";
    }
    else{
        document.getElementById('rpwd').style.border = "2px solid green";
        document.getElementById('su6').style.visibility = "visible";
        document.getElementById('er6').style.visibility = "hidden";
    }


    // GENDER
    if ( gender_male == false && gender_female == false && gender_prefer == false ){
        error = error + 1;
        document.getElementById('egender').innerHTML = "Select Your Gender ! ";
    }
    else{
        document.getElementById('egender').innerHTML = "";
    }

    // BIRTH YEAR
    if ( birth_year == 0 ){
        error = error + 1;
        document.getElementById('birth_year').style.border = "2px solid red";
    }
    else{
        document.getElementById('birth_year').style.border = "2px solid green";
    }

    // IMAGE
    if ( image == "" || imageValidator(image) == false){
        error = error + 1;
        document.getElementById('img').style.border = "2px solid red";
    }
    else{
        document.getElementById('img').style.border = "2px solid green";
    }

    // OUTPUT OF ERROR MESSAGE
    if ( error != 0 ){
     //   alert(error);
        return false;
        
    }
    else {
        return true;
    }
}


// FUNCTION FOR ERROR ALERT       
function errorAlert(id){
    document.getElementById(id).classList.add("red_box");
}


// FUNCTION FOR SUCCESS ALERT 
function successAlert(id){
    document.getElementById(id).classList.add("green_box");
}


// FUNCTION FOR ERROR & SUCCESS ALERT
// FIRST NAME 
function fnameOnBlur(id){
    value = getIdValue(id,'text');
    if ( value == ""){
        errorAlert(id);
    }
    else{
        successAlert(id);
    }
}
// USE "fnameOnBlur" THIS FUNCTION TO ALL INPUT TAG IN HTML FILE.......


// FUNCTION FOR oninput EVENT APPLIED IN PASSWORD
function passwordOnInput(id){
    value = document.getElementById('pwd').value;
    document.getElementById('epwd').innerHTML = passwordValidator(value);
}

// onchange EVENT FUNCTION APPLIED IN BIRTH YEAR
function yearOnChange(id){
    if ( id == 0 ){
        document.getElementById('birth_year').style.border = "2px solid red";
    }
    else{
        document.getElementById('birth_year').style.border = "2px solid green";
    }
}