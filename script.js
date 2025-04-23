const screen = document.getElementById("screen");
const history = document.getElementById("log");
const operator = ['+', '-', '/', '*'];
let text = [];
let n = 0;
text[n] = "0";


// Keyboard Input
document.addEventListener("keydown", function (pressed) {
    if (
        !isNaN(pressed.key) 
        && pressed.key.length === 1
        && pressed.key != " "
    )  { //Detecting number input
        if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            if (n != 0) history.textContent = text[n-1];
            text[n] += pressed.key;
            screen.textContent = text[n];
        } else { // Character exceed
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
    } else if (pressed.key === "Backspace") { //Delete
        if (text[n] != "0") {
            text[n] = text[n].slice(0, -1);
        if (text[n] === "") text = "0";
        screen.textContent = text;
        }
        
    } else if (pressed.key === "Escape") { //Reset
        n = 0;
        text[n] = "0";
        screen.textContent = text[n];
        history.textContent = " ";
    } else if (operator.includes(pressed.key) && text[n] != "0") { //Operator
        if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            text[n] += pressed.key;
            screen.textContent = text[n];

            n++;
            text[n] = "";
        } else { //Operator overlap
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
    } else if (pressed.key === "=") { //Equal
        if (n != 0 && text[n] != "") {
            let result = eval(text.join(""));
            console.log(text.join("") + " = " + result);
            n = 0;
            text[n] = result;
            screen.textContent = text[n];
            history.textContent = " ";
        } else { // Not enough operator
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
            screen.style.color = "";
            }, 200);
        } 
    }
})

// On-screen button input
document.querySelectorAll(".b-n").forEach(function(el) {
  el.addEventListener("click", function() {
    if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
        if (text[n] === "0") text[n] = "";
        if (n != 0) history.textContent = text[n-1];
        text[n] += this.textContent;
        screen.textContent = text[n];
    } else {  //Character exceed
        screen.style.color = "rgb(255, 88, 88)"; 
        setTimeout(() => {screen.style.color = "";}, 200);
    }
  });
});

document.querySelectorAll(".b-a").forEach(function(el) { // Operator
    el.addEventListener("click", function() {
        if (
            text[n].length < 14
            && !operator.includes(text[n].charAt(text[n].length - 1))
            && text[n] != "0"
        ) {
            if (text[n] === "0") text[n] = "";
            if (this.textContent === "x") {
                text[n] += "*"
            } else {
                text[n] += this.textContent;
            }
            screen.textContent = text[n];
            n++;
            text[n] = "";
        } else { //Operator overlap
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {screen.style.color = "";}, 200);
        }
    });
});

document.getElementById("delete").addEventListener("click", function() { //Delete
    text[n] = text[n].slice(0, -1);
    if (text[n] === "") text[n] = "0";
    screen.textContent = text[n];
})

document.getElementById("reset").addEventListener("click", function() { //Reset
    n = 0;
    text[n] = "0";
    screen.textContent = text[n];
    history.textContent = " ";
})

document.getElementById("equal").addEventListener("click", function() { //Equal
    if (n != 0 && text[n] != "") {
        let result = eval(text.join(""));
        console.log(text.join("") + " = " + result);
        n = 0;
        text[n] = result;
        screen.textContent = text[n];
        history.textContent = " ";
    } else { // Not enough operator
        screen.style.color = "rgb(255, 88, 88)";
        setTimeout(() => {
        screen.style.color = "";
        }, 200);
    } 
})
