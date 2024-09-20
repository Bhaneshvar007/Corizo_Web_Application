let loginPage = document.querySelector(".loginPage");
let signupPage = document.querySelector(".signupPage");

let signInWay = document.querySelector(".signInWay");
let signUpWay = document.querySelector(".signUpWay");

signInWay.addEventListener("click" , ()=>{
    loginPage.style.display = "block";
    signupPage.style.display = "none";
})

signUpWay.addEventListener("click" , ()=>{
    loginPage.style.display = "none";
    signupPage.style.display = "block";
})