class Boss extends GameObject{
    //container,src,width,height,x,y,velX,velY,bgcolor
    //tick과 render 있음
    tick(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    }
}