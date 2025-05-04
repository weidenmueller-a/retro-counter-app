'use strict';

const increment = document.getElementById('increment-btn');
const decrement = document.getElementById('decrement-btn');
const reset = document.getElementById('reset-btn');

const counterValue = document.getElementById('counter-value');

let myCount = 0;


// COUNT UP
increment.addEventListener('click', () => {
  myCount += 1;
  counterValue.textContent = myCount;
});

// COUNT DOWN
decrement.addEventListener('click', () => {
  myCount -= 1;
  counterValue.textContent = myCount;
});

// RESET
reset.addEventListener('click', () => {
  myCount = 0;
  counterValue.textContent = myCount;
});





