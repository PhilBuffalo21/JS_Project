let number = document.getElementById('Number');
let genButton = document.getElementById('gen');


genButton.onclick = function() {
    // range of 1 to 100

    number.textContent = Math.floor(Math.random() * 100) + 1;
}