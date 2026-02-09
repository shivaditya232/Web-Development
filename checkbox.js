const subscription=document.getElementById("subscription");
const visa=document.getElementById("visa");
const mastercard=document.getElementById("mastercard");
const gpay=document.getElementById("gpay");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");
const submit=document.getElementById("submit");
submit.onclick=function() {
    if(subscription.checked) {
        subresult.textContent="You are subscribed";
    }
    else {
        subresult.textContent="You are not subscribed";
    }
    if (visa.checked) {
        paymentresult.textContent="You are paying through visa";
    }
    else if(mastercard.checked) {
        paymentresult.textContent="You are paying through mastercard";
    }
    else if(gpay.checked) {
        paymentresult.textContent="You are paying through gpay";
    }
    
}