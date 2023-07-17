const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("mouseover", function() {
  div2.classList.add("highlight");
});

div1.addEventListener("mouseout", function() {
  div2.classList.remove("highlight");
});

const input = document.querySelector('input');

input.addEventListener('change', function () {
  console.log(input.value);
});