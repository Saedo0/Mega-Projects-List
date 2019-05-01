<<<<<<< HEAD:app.js
let input = document.querySelector("#input_Number");
let result = document.querySelector("#result");
let button = document.querySelector("#submit_Button");
const PI = Math.PI;



button.addEventListener("click", function (event) {
    if (input.value >= 13) {
        document.getElementById("result").innerHTML = "Please enter a number between 1-12";
    } else {
        let x = document.getElementById("input_Number").value;
        document.getElementById("result").innerHTML = Math.PI.toFixed(x - 1);
    }
=======
let input = document.querySelector("input");
let result = document.querySelector("#result");
let button = document.querySelector("#submit_button");

button.addEventListener("click", function () {
    let value = input.value;
    console.log(value);
>>>>>>> b2798e56bdfe3eac595ed4f1d5087a67b537b5aa:Find-Pi/app.js
});