const num = document.querySelector("#num");
const text = document.querySelector("#text");

function count() {
  let string = text.value;

  //   console.log(string.length);
  num.innerText = string.length;
}

text.addEventListener("keyup", count);
