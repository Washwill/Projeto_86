var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function newImage()
{
   fabric.Image.fromURL("Bolo.jpeg", function(Img){
       blockImageObject = Img;

       blockImageObject.scaleWidth(600);
       blockImageObject.scaleHeight(500);
       blockImageObject.set({
           top:0,
           left:0
       });
       canvas.add(blockImageObject);
   });
   
}

function playSound(){
    x.play();
   
}