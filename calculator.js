const age = document.querySelector(".age");
const ages = document.querySelector(".ages")
const gender = document.querySelector(".gender")
const height = document.querySelector(".height")
const weight = document.querySelector(".weight")
const result = document.querySelector(".result")
const suggestion = document.querySelector(".suggestion")
let BMI
function calculate(){
    if(age < 2 || age > 120){
        ages.innerHTML = "please provide age between 2 & 120"
        return
    }
    let weights = parseInt(weight.value)
    let heights = parseInt(height.value)*parseInt(height.value);
    let ans = (weights/heights)*10000
    ans = Math.ceil(ans);
    if(ans < 16){suggestion.innerHTML = "severe Thinness"}
    if(ans >= 16 && ans<=17){suggestion.innerHTML = "Moderate Thinness"}
    if(ans > 17 && ans<=18.5){suggestion.innerHTML = "Normal weight"}
    if(ans >= 25 && ans<=30){suggestion.innerHTML = "Over weight"}
    if(ans >= 30 && ans<=35){suggestion.innerHTML = "Obese Class l"}
    if(ans >= 35 && ans<=40){suggestion.innerHTML = "Obese Class ll"}
    if(ans >= 35 && ans<=40){suggestion.innerHTML = "Obese Class ll"}
    if(ans > 40){suggestion.innerHTML = "Obese Class lll"}
 
    result.innerHTML = ans + "  kg/m2"

}

function clears(){
    result.innerHTML = "";
    suggestion.innerHTML="";
    weight.value = "";
    height.value = "";
    // debugger
}
