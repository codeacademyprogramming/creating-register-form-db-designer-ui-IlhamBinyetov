  //inputname  
  
  let inputName = document.getElementById("name");
  let hasNumber = /\d/;    
  let text ="";
  inputName.addEventListener('input',function(event){
    if(hasNumber.test(event.target.value)){
      text = "firstname can`t be a number";
    }  

    if(!hasNumber.test(event.target.value)){
      let danger =  document.querySelector(".mdi-alert-circle-outline");
      let success = document.querySelector(".name-check");
      if (inputName.value.length<2 || inputName.value.length>50) {
            text = "firstname length cannot be less than 2 and greater than 50";
            danger.classList.add("danger");
            danger.classList.remove("danger_icon");
          } 
          else{
            text ="";
            danger.classList.add("danger_icon");
            danger.classList.remove("danger");
            success.classList.add("success");
          }
          if(inputName.value == ""){
            success.classList.add("success_icon");
            danger.classList.add("danger_icon");
            success.classList.remove("success");
            danger.classList.remove("danger");
            document.getElementById("error-fname").innerHTML = ""
            
          }
    }
    document.getElementById("error-fname").innerHTML = text;
  }) 
  
  //email
    let _email = document.querySelector("#email");
    let danger = document.querySelector(".email_icon");
    let success = document.querySelector(".email-check")
    _email.addEventListener('input', function (event){
      let text1 = "" 
      if(!event.target.value.includes("@")){
        text1 = "Email must contain @"
        danger.classList.add("danger");
        danger.classList.remove("email_danger_icon"); 
      }
      else{
        danger.classList.add("email_danger_icon");
        danger.classList.remove("danger");
        success.classList.remove("success_icon");
        success.classList.add("success_email"); 
      }
      if(_email.value == ""){ 
        success.classList.add("success-email-dnone");
      }
      document.querySelector("#error-email").innerHTML = text1
    })

      //username
      let successOfUsername = document.querySelector(".username-check")
    let dangerOfUsername = document.querySelector(".username_icon")
    let username = document.querySelector("#username");
    username.addEventListener('input', function(event){
      let text2 = "";
      
      if (event.target.value.length<2||event.target.value.length>50){
        text2 = "username length cannot be less than 2 and greater than 50"
        dangerOfUsername.classList.add("danger");
        dangerOfUsername.classList.remove("username_danger_icon");
      }else{
        dangerOfUsername.classList.add("username_danger_icon");
        dangerOfUsername.classList.remove("danger");
        successOfUsername.classList.remove("success_icon");
        successOfUsername.classList.add("username_success_icon")
      }
      if(username.value ==""){
        successOfUsername.classList.add("success-username-dnone")
      }

      document.querySelector("#error-uname").innerHTML = text2
    })

    // password

    let password = document.querySelector("#password");
    let repeatPassword = document.querySelector("#r-password");
    let button = document.querySelector(".button");
    button.addEventListener('click', function(e){
      let text3 = "";
      if(password.value != repeatPassword.value){
        text3 = "Repeat password is false";
      }
      document.querySelector("#error-password").innerHTML = text3;
    })

    let checkbox = document.querySelector("#check");
    checkbox.onchange = function(e){
      if(this.checked) {
        button.disabled = false;
      }else{
        button.disabled = true;
      }
    }
    