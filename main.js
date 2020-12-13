var canvas=new fabric.Canvas("myCanvas");
playerx=10;playery=10;
blockimagewidth=30;blockimageheight=30;
var playerobject="";
var blockimage="";

function playerupdate()
{
fabric.Image.fromURL("player.png",function(Img)
{
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
top:playery,left:playerx
});
canvas.add(playerobject);
}
);
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
blockimage=Img;
blockimage.scaleToWidth(blockimagewidth);
blockimage.scaleToHeight(blockimageheight);
blockimage.set({
top:playery,left:playerx
});
canvas.add(blockimage);
}
);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey==true && keypressed=='80')
{
console.log("garvit pressed shift and p together");
blockimagewidth=blockimagewidth+10;
blockimageheight=blockimageheight+10;
document.getElementById("current_width").innerHTML=blockimagewidth;
document.getElementById("current_height").innerHTML=blockimageheight;
}
if(e.shiftKey==true && keypressed=='77')
{
console.log("garvit presed shift and m together");
blockimagewidth=blockimagewidth-10;
blockimageheight=blockimageheight-10;
document.getElementById("current_width").innerHTML=blockimagewidth;
document.getElementById("current_height").innerHTML=blockimageheight;
}
if(keypressed=='38')
{
up();
console.log("up");
}
if(keypressed=='40')
{
down();
console.log("down");
}
if(keypressed=='37')
{
left();
console.log("left");
}
if(keypressed=='39')
{
right();
console.log("right");
}
if(keypressed=='87')
{
new_image('wall.jpg');
console.log("w");
}
if(keypressed=='71')
{
new_image('ground.png');
console.log("g");
}
if(keypressed=='76')
{
new_image('light_green.png');
console.log("l");
}
if(keypressed=='84')
{
new_image('trunk.jpg');
console.log("t");
}
if(keypressed=='82')
{
new_image('roof.jpg');
console.log("r");
}
if(keypressed=='89')
{
new_image('yellow_wall.png');
console.log("y");
}
if(keypressed=='68')
{
new_image('dark_green.png');
console.log("d");
}
if(keypressed=='85')
{
new_image('unique.png');
console.log("u");
}
if(keypressed=='67')
{
new_image('cloud.jpg');
console.log("c");
}
}

function up()
{
if(playery>=0)
{
playery=playery-blockimageheight;
console.log("blockimageheight= "+blockimageheight);
console.log("garvit pressed up key,x= "+playerx+" y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function down()
{
if(playery<=450)
{
playery=playery+blockimageheight;
console.log("blockimgeheight= "+blockimageheight);
console.log("garvit pressed down key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function left()
{
if(playerx>=0)
{
playerx=playerx-blockimagewidth;
console.log("blockimagewidth= "+blockimagewidth);
console.log("garvit pressed left key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function right()
{
if(playerx<=850)
{
playerx=playerx+blockimagewidth;
console.log("blockimagewidth= "+blockimagewidth);
console.log("garvit pressed right key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}