const textToType = `"A röplabdában a csapat olyan, mint a jól olajozott gépezet: minden egyes játékosnak fontos szerepe van a sikeres működésben."`;

    let currentText = '';
    let index = 0;
    const speed = 50;

    function typeText() {
        document.getElementById('text-container').textContent = currentText;
        if (index < textToType.length) {
            currentText += textToType.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();


window.addEventListener("blur" , () => {
    document.title = "Gyere vissza👋";
});

window.addEventListener("focus" , () => {
    document.title = "Röplabda 🏐";
});