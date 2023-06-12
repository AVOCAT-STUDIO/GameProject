class Enemy extends Box{
    //container,width,height,x,y,velX,velY,bgcolor,text
    constructor(container,src,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);
        this.alien;
        this.src=src;
        this.alien=document.createElement("img");
        this.alien.src=this.src;
        this.alien.style.width=this.width+"px";
        this.alien.style.height=this.height+"px";
        this.alien.style.position="absolute";
        this.alien.style.left=0+"px";
        this.alien.style.top=0+"px";
        this.div.appendChild(this.alien);
        
        this.ex;
        this.ex=document.createElement("div");
        this.ex.style.width=60+"px";
        this.ex.style.height=60+"px";
        this.ex.style.position="absolute";
        this.ex.style.left=150+"px";
        this.ex.style.top=120+"px";
        this.ex.style.fontWeight="bold";
        this.ex.style.fontSize=50+"px";
        this.ex.style.textAlign="center";
        //this.ex.style.background="red";
        this.ex.innerText=numberArray[getRandom(10)];
        this.div.appendChild(this.ex);
        
        this.sensor;
        this.sensor=document.createElement("div");
        this.sensor.style.background="yellow";
        this.sensor.style.width=130+"px";
        this.sensor.style.height=5+"px";
        this.sensor.style.position="absolute";
        this.sensor.style.left=120+"px";
        this.sensor.style.top=250+"px";
        this.div.appendChild(this.sensor);
        
    }
    moveLeftRight(){ //안됨... 계속 안됨.. 왜 안됨?? 머가다름?
        for(let i=0; i<enemyArray.length;i++){
            if(enemyArray[i].y==320){
                enemyArray[i].velY=0;
                if(flag3){
                    enemyArray[i].velX=-5;
                }else{
                    enemyArray[i].velX=5;
                }
                if(this.x<=0){
                    flag3=!flag3;
                }
            }
        }
    }
    
}