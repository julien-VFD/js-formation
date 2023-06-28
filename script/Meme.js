export function Meme(s) {
  var title = s;
  this.title = title;
  function changeTitle(t){
    this.title = t;
  }
  this.changeTitle = changeTitle;

  this.text = '';
  this.x = 0;
  this.y = 20;
  this.imageId = -1;
  this.fontSize = 20;
  this.fontWeight = '500';
  this.underline = false;
  this.italic = false;
  this.color = '#005500';
  this.fill = '#550000';

}