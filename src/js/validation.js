window.onload = function validationForm() {
    let button = document.getElementById("signUpButton");
    let emailField = document.getElementById("emailAddress");
    let response = document.getElementById("formMessage");
    let response2 = document.getElementById("formMessage2");
    let passwordField = document.getElementById("newPassword");
    let email = emailField.value;
    let password = passwordField.value;
  
  
    // function to post the returned email and password to the backend
    button.addEventListener("click", () => {
      email = emailField.value;
      password = passwordField.value;
  
  
      if (validate()) {
        const theUrl = "http://localhost:3000/api/user";
        let accountType = userType();
        let request = new XMLHttpRequest();
  
        // POST to http:// which returns the POST data as JSON
        request.open("POST", theUrl);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify({"email": email, "password": password, "account_type": accountType}));
        document.getElementById("myModal").hidden = true;
        alert("Account successfully created!");
        location.reload();
        return true;
  
      } else {
        console.log("No success");
      }
    });
  
    function validate() {
      validateEmail();
  
      if (validateEmail() && validatePassword()) {
        return true;
      } else {
        return false;
      }
  
    }
  
    function validateEmail() {
      // eslint-disable-next-line
      const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if (!email) {
        response.innerHTML = "Email is required";
        return false;
      }
  
      if (!email.match(validEmail)) {
        response.innerHTML = "Email is not valid";
        return false;
      }
  
      response.innerHTML = "";
      return true;
    }
  
    function validatePassword() {
      const minlength = 8;
      const hasCapitalLetter = /[A-Z]/g;
      const hasNumber = /\d/g;
  
      if (!password) {
        response2.innerHTML = "Password is required";
        return false;
      }
  
      if (!hasCapitalLetter.test(password)) {
        response2.innerHTML = "Please use at least one capital letter.";
        return false;
      }
  
      if (!hasNumber.test(password)) {
        response2.innerHTML = "Please use at least one number.";
        return false;
      }
  
      if (password.length < minlength) {
        response2.innerHTML = `Please enter a password that is at least ${minlength} characters long`;
        return false;
      }
  
      response2.innerHTML = "";
      return true;
      }
      
      function userType() {
        return document.getElementById("accountType").innerHTML;
      }
  } 