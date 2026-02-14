//let username;
//username=window.prompt("What's your username?");
//console.log(username);

let username;
document.getElementById("submit").onclick=function() {
    username=document.getElementById("mytext").value;
    document.getElementById("h1").textContent="Hi "+username;
}