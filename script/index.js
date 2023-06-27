var maVar = "bananaaaaaaaaaa"
var CONSTANTE = Object.freeze({})


function onbuttonclick(evt){

}
var obj = {
    a:123,
    b: function (){
        console.log("hello");
    },
    c: function (a){
        console.log(a);
    },
};
/**
 * print ce que tu mets en paramètre
 * @param {*} a 
 */
function printA(a){
    console.log(a);
}
function init(){
    var currentDate = new Date();
    console.log(currentDate.toISOString());
    var footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = currentDate.toISOString();
}

function colorFooter(){
    var footer = document.getElementsByTagName("footer")[0];
    //footer.style.backgroundColor = '#00AC00'
    footer.style.backgroundColor = 'rgb(11,128,11,0.5)';
    footer.style.fontStyle = 'italic';
    footer.style.textDecoration = 'underline';
    footer.style.color = 'white';

}
document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
    colorFooter()
})
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