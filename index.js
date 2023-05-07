let buttonPool = document.querySelector('.btn-pool');
let buttonReset = document.querySelector('.btn-reset');
let counterText = document.querySelector('.counter');
let counter = 0;

buttonPool.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});