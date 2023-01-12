'use strict';

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 7200);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(-" + value + "deg)";
    value += Math.ceil(Math.random() * 7200);
}