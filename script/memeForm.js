var currentMeme = new Meme("newTitle");


function initMemeEditor(){

    var form = document.forms['meme-form'];
    form['meme-titre'].addEventListener('input',function(evt){
        currentMeme.title = evt.target.value;
        console.log(currentMeme.title);
    })
    form['meme-text'].addEventListener('input',function(evt){
        currentMeme.text = evt.target.value;
        console.log(currentMeme.text);
    })
    form['meme-x'].addEventListener('input',function(evt){
        currentMeme.x = parseInt(evt.target.value);
        console.log(currentMeme.x);
    })
    form['meme-y'].addEventListener('input',function(evt){
        currentMeme.y = parseInt(evt.target.value);
        console.log(currentMeme.y);
    })
    form['meme-font-size'].addEventListener('input',function(evt){
        currentMeme.fontSize = parseInt(evt.target.value);
        console.log(currentMeme.fontSize);
    })
    form['meme-font-weight'].addEventListener('input',function(evt){
        currentMeme.fontWeight = parseInt(evt.target.value);
        console.log(currentMeme.fontWeight);
    })
    form['meme-img'].addEventListener('input',function(evt){
        currentMeme.imageId = evt.target.value;
        console.log(currentMeme.imageId);
    })
    form['meme-color'].addEventListener('input',function(evt){
        currentMeme.color = evt.target.value;
        currentMeme.fill = evt.target.value;
        console.log(currentMeme.color);
    })
    form['meme-underline'].addEventListener('input',function(evt){
        currentMeme.underline = evt.target.value;
        console.log(currentMeme.underline);
    })
    form['meme-italic'].addEventListener('input',function(evt){
        currentMeme.italic = evt.target.value;
        console.log(currentMeme.italic);
    })

}



document.addEventListener("DOMContentLoaded", function (evt) {
    initMemeEditor();
});