const screen = document.getElementById("screen");
const operator = ['+', '-', '/', '*'];
let text = [];
let n = 0;
text[n] = "0";



document.addEventListener("keydown", function (pressed) {
    
    if (!isNaN(pressed.key) && pressed.key.length === 1)  {
        if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            text[n] += pressed.key;
            screen.textContent = text[n];
        } else if (operator.includes(text[n].charAt(text[n].length - 1))){
            console.log(text[n]);
            
            n++;
            text[n] = "0";
        } else {
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
    } else if (pressed.key === "Backspace") {
        text[n] = text[n].slice(0, -1);
        if (text[n] === "") text = "0";
        screen.textContent = text;
    } else if (pressed.key === "Escape") {
        text[n] = "0";
        screen.textContent = text[n];
    } else if (operator.includes(pressed.key) && text[n].length != 1) {
        if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            text[n] += pressed.key;
            screen.textContent = text[n];
        } else {
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
        
    }
})

document.querySelectorAll(".b-n").forEach(function(el) {
  el.addEventListener("click", function() {
    if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            text[n] += this.textContent;
            screen.textContent = text[n];
        } else if (operator.includes(text[n].charAt(text[n].length - 1))){
            n++;
            text[n] = "0";
            screen.textContent = text[n];
        } else {
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
  });
});

document.querySelectorAll(".b-a").forEach(function(el) {
    el.addEventListener("click", function() {
        if (text[n].length < 14 && !operator.includes(text[n].charAt(text[n].length - 1))) {
            if (text[n] === "0") text[n] = "";
            if (this.textContent === "x") {
                text[n] += "*"
            } else {
                text[n] += this.textContent;
            }
            screen.textContent = text[n];
        } else {
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
    });
});
document.getElementById("delete").addEventListener("click", function() {
    text[n] = text[n].slice(0, -1);
    if (text[n] === "") text[n] = "0";
    screen.textContent = text[n];
})

document.getElementById("reset").addEventListener("click", function() {
    text[n] = "0";
    screen.textContent = text[n];
})

