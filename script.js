"use strict";

const array = [];
let i;
let result;

initLoop();

function initLoop() {
  i = 0;
  loop();
}

function loop() {
  console.log(array);
  result = array.unshift(i);
  if (result === 10) {
    result = array.pop(i);
  }
  i++;
  setTimeout(loop, 1000);
}
