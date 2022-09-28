// Declarations

let screen = document.querySelector(".textview");
let string = "";
function insert(num) {
  string = string + num;
  screen.value = string;
}

function equals() {
  string = eval(string);
  screen.value = string;
}

function clean() {
  string = "";
  screen.value = string;
}

function back() {
  string = string.slice(0, -1);
  screen.value = string;
}
