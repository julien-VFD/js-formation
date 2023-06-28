import { Meme } from "./Meme.js";
import { images } from "./value.js"

var currentMeme = new Meme("newTitle");

export function initMemeEditor() {

  var form = document.forms["meme-form"];
  form["meme-titre"].addEventListener("input", function (evt) {
    currentMeme.title = evt.target.value;
    printTruc(currentMeme.title);
  });
  form["meme-text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    printTruc(currentMeme.text);
  });
  form["meme-x"].addEventListener("input", function (evt) {
    currentMeme.x = parseInt(evt.target.value);
    printTruc(currentMeme.x);
  });
  form["meme-y"].addEventListener("input", function (evt) {
    currentMeme.y = parseInt(evt.target.value);
    printTruc(currentMeme.y);
  });
  form["meme-font-size"].addEventListener("input", function (evt) {
    currentMeme.fontSize = parseInt(evt.target.value);
    printTruc(currentMeme.fontSize);
  });
  form["meme-font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontWeight = parseInt(evt.target.value);
    printTruc(currentMeme.fontWeight);
  });
  form["meme-img"].addEventListener("input", function (evt) {
    currentMeme.imageId = evt.target.value;
    printTruc(currentMeme.imageId);
  });
  form["meme-color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    currentMeme.fill = evt.target.value;
    printTruc(currentMeme.color);
  });
  form["meme-underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
    printTruc(currentMeme.underline);
  });
  form["meme-italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
    printTruc(currentMeme.italic);
  });
}

function resizeImg(){
    console.log("triche")
}

function renderMeme(meme) {
  var svg = document.querySelector("#editor-viewer svg");

  var svgImage = svg.querySelector("image");
  svgImage.href.baseVal = meme.imageId;
  svgImage.x.baseVal.value = meme.x;
  svgImage.y.baseVal.value = meme.y;

  var svgText = svg.querySelector("text");
  svgText.innerHTML = meme.text;

  svgText.style.textDecoration = meme.underline ? "underline" : "none";
  svgText.setAttribute('font-style', meme.italic ? "italic" : "none") ;
  svgText.style.fill = meme.color;
  svgText.style.fontSize = meme.fontSize;
  svgText.style.fontWeight = meme.fontWeight;

}

export function loadSelectImage(images){
    var selector = document.querySelector("#meme-img");

    var purge = selector.children;

    // for(var i = 1; i=purge.length; i++){
    //     selector.remove(purge[i]);
    // }

    images.forEach(element => {
        var opt=document.createElement('option')
        opt.value=element.url;
        opt.innerHTML=element.titre;
        selector.appendChild(opt);
    });
    
    //selector.append(images)
}

function printTruc(v) {
  console.log(v);
  renderMeme(currentMeme);
}

document.addEventListener("DOMContentLoaded", function (evt) {
  initMemeEditor();
  loadSelectImage(images);
});
