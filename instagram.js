const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const h1=document.getElementById("h1");

submitBtn.onclick = function () {
  const user = username.value;
  const pass = password.value;

  console.log("Username:", user);
  console.log("Password:", pass);
  h1.textContent="This is your password "+pass;

  

};