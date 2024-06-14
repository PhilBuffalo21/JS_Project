let counter = document.getElementById('Counter');
let increment = document.getElementById('inc');
let decrement = document.getElementById('dec');
let reset = document.getElementById('reset');

let count = 0;
counter.textContent = count;
increment.onclick = function() {
    count++;
    counter.textContent = count;
};

decrement.onclick = function() {
    count--;
    counter.textContent = count;
};

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
};
