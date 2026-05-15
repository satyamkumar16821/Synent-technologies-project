const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "" || password === ""){
    message.style.color = "red";
    message.innerText = "Please fill all fields";
  } else {
    message.style.color = "green";
    message.innerText = "Login Successful";
  }
});