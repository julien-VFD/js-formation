var maVar = "bananaaaaaaaaaa";
var CONSTANTE = Object.freeze({});

function onbuttonclick(evt) {}
var obj = {
  a: 123,
  b: function () {
    console.log("hello");
  },
  c: function (a) {
    console.log(a);
  },
};
/**
 * print ce que tu mets en paramètre
 * @param {*} a
 */
function printA(a) {
  console.log(a);
}
function init() {
  var currentDate = new Date();
  console.log(currentDate.toISOString());
  var footer = document.getElementsByTagName("footer")[0];
  footer.innerHTML = currentDate.toISOString();
  var themeSelector = document.querySelector("input[name=themeSelector]");
  themeSelector.addEventListener("change", function () {
    changetheme(this.checked);
  });
}

function colorFooter() {
  var footer = document.getElementsByTagName("footer")[0];
  //footer.style.backgroundColor = '#00AC00'
  footer.style.backgroundColor = "rgb(11,128,11,0.5)";
  footer.style.fontStyle = "italic";
  footer.style.textDecoration = "underline";
  footer.style.color = "white";
}
document.addEventListener("DOMContentLoaded", function (evt) {
  console.log(evt);
  init();
  colorFooter();
});

function changetheme(light) {
  var nav = document.getElementsByTagName("nav")[0];
  var sliderTheme = document.getElementById("flexSwitchCheckChecked");
  var memeText = document.getElementById('memeText');
  if (light) {
    console.log("theme clair");
    document.body.className = "";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    sliderTheme.style.color = "green";
    memeText.style.fill = "black";
  } else {
    console.log("theme foncé");
    document.body.className = "dark";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    sliderTheme.style.color = "white";
    memeText.style.fill = "white";
  }
}

// obj.a = 254;
// obj.b();
// obj.c("bonjour");
// printA("lemonde");
//  document.getElementsByTagName('footer')
// d = new Date();
// printA(d.getFullYear());
// printA(d.getMonth());
// printA(d.getDate());
// printA(d.toISOString());
// printA(d.toDateString());
