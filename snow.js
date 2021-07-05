 class Snow{
     constructor(){
         var options={
             isStatic:false
         }
         this.snow=Bodies.rectangle(random(1,800),10,10,10,options);
         World.add(world,this.snow);
     }
     display(){
         imageMode(CENTER);
         image(snowImg,this.snow.position.x,this.snow.position.y,10,10);
     }
 }