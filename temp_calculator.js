let textbox=document.getElementById("textbox");
let celciustofahrenheit=document.getElementById("celciustofahrenheit");
let fahrenheittocelcuis=document.getElementById("fahrenheittocelcuis");
let result=document.getElementById("result");
let temp;

function convert() {
    if (celciustofahrenheit.checked){
        temp=Number(textbox.value)
        temp=temp*9/5+32
        result.textContent="The Fahrenheit is " +temp
    }
    else if(fahrenheittocelcuis.checked) {
        temp=Number(textbox.value)
        temp=temp*5/9-32
        result.textContent="The Celcuis is " +temp
    }
    else {
        result.textContent="Enter a unit";
    }

}