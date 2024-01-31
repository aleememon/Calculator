let display = document.getElementById("result");
let buttons = document.querySelectorAll("input[type='button']");
let arrayButtons = Array.from(buttons);
let words = '';
arrayButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        if(e.target.value == "C") {
            words = '';
            display.value = words;
        }
        else if(e.target.value == "=") {
            words = eval(words);
            display.value = words;
        }
        else {
            words += e.target.value;
            display.value = words;
        }
    });
});