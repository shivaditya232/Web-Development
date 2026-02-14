function generatepassword(length,lowercase,uppercase,symbol,number) {
    const length=12;
const lowercase="abcdefghijklmnopqrstuvwxyz";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol="!@#$%^&*()_+";
const number="1234567890";
let allowed="";
let password="";
if (lowercase1) {
    allowed+=lowercase;
}
else{
    allowed+="";
}
if (uppercase1) {
    allowed+=uppercase;
}
else{
    allowed+="";
}
if (symbol1) {
    allowed+=symbol;
}
else{
    allowed+="";
}
if (number1) {
    allowed+=number;
}
else{
    allowed+="";
}
if (length<=0) {
    console.log("length should be atleast 1");
}
if (allowed.length===0){
    console.log("Atleast one character needs to be selected");
}
for (let i=0;i<allowed;i++){
    let temp=Math.floor(Math.random()*(allowed.length));
     password+=allowed[temp];
}
return console.log(password);




}
const length=12;
const lowercase1=true;
const uppercase1=true;
const symbol1=true;
const number1=true;

generatepassword(length,lowercase,uppercase,symbol,number);