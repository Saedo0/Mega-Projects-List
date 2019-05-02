let input = document.querySelector("#input_Number");
let result = document.querySelector("#result");
let button = document.querySelector("#submit_Button");
const PI = Math.E;



button.addEventListener("click", function (event) {
    if (input.value >= 13) {
        document.getElementById("result").innerHTML = "Please enter a number between 1-12";
    } else {
        let x = document.getElementById("input_Number").value;
        document.getElementById("result").innerHTML = Math.E.toFixed(x - 1);
    }
});