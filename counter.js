const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const count=document.getElementById("count");
let count1=0;
increase.onclick=function() {
    count1++;
    count.textContent=count1;
}
decrease.onclick=function() {
    count1--;
    count.textContent=count1;
}
reset.onclick=function() {
    count1=0;
    count.textContent=count1;
}
