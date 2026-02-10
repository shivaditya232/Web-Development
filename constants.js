const PI=3.1415;
let radius;
let circumference;
document.getElementById("submit").onclick=function() {
    radius=document.getElementById("input").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("h3").textContent=circumference+"cm"

}