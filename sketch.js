var doggy
var database 
var count
var stock 
function preload()
{
   doggyi = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  doggy= createSprite(400,300,10,10) 
  doggy.addImage(doggyi)
  doggy.scale=0.5;
  database=firebase.database()
  var doggyposition  = database.ref("food")
    doggyposition.on("value",read,showerror)
}


function draw() { 
  background ("white") 
 text(stock,50,10)
 if (keyDown(DOWN_ARROW))
 {
   stock-=1;
   updatefirebase();
 }
  drawSprites();

}
function read (data)
{
  count=data.val()
  stock = count.count;
  console.log(count.count)
}
function showerror()
{

}
function updatefirebase ()
{
  database.ref("food").update
  ({
     count:stock
  })
}

