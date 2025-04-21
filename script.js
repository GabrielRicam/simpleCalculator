const screen = document.getElementById("screen");
// const input = [];
// let n = 0;
let text = "";




document.addEventListener("keydown", function (pressed) {
    if (!isNaN(pressed.key) && pressed.key.length === 1) {
        if (text.length < 14) {
            if (text === "0") text = "";
            text += pressed.key;
            screen.textContent = text;
        } else {
            screen.style.color = "rgb(255, 88, 88)";
            setTimeout(() => {
                screen.style.color = "";
                }, 200);
        }
    } else if (pressed.key === "Backspace") {
        text = text.slice(0, -1);
        if (text === "") text = "0";
        screen.textContent = text;
    } else if (pressed.key === "Escape") {
        text = "0";
        screen.textContent = text;
    }
})

document.querySelectorAll(".b-n").forEach(function(el) {
  el.addEventListener("click", function() {
    if (text.length < 14) {
        if (text === "0") text = "";
        text += this.textContent;
        screen.textContent = text;
    } else {
        screen.style.color = "rgb(255, 88, 88)";
        setTimeout(() => {
            screen.style.color = "";
            }, 200);
    }
    
  });
});

document.getElementById("delete").addEventListener("click", function() {
    text = text.slice(0, -1);
    if (text === "") text = "0";
    screen.textContent = text;
})

document.getElementById("reset").addEventListener("click", function() {
    text = "0";
    screen.textContent = text;
})

