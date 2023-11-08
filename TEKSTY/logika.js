const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("mouseover", function () {
  div2.classList.add("highlight");
});

div1.addEventListener("mouseout", function () {
  div2.classList.remove("highlight");
});

const hoverDiv = document.querySelector('.hover-div');
const button = hoverDiv.querySelector('button');
const hoverContent = hoverDiv.querySelector('.hover-content');

button.addEventListener('click', function() {
  hoverDiv.classList.toggle('active');
})