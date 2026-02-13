const text=document.getElementById("age");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let age=0;
submit.onclick=function() {
    age=text.value;
    age=Number(age);
    

    if (age>=100) {
result.textContent="You are too old to enter this site";
}
    else if (age==0) {
result.textContent="whaattt";
}
    else if(age>=18) {
result.textContent="Bro this is not that kinda website";
}
    else if(age<0) {
result.textContent="What are you a ghooostt!";
}
    else{
    result.textContent="Get out you bitch";
}
}