if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("*").style.filter = "invert(1)";
} else {
  console.log("light");
}

//sticky menu
window.onscroll = function () {
  scrollFunction();
};
var menu = document.getElementById("menu");
var sticky = menu.offsetTop;
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
