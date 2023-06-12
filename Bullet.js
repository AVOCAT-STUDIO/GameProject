class Bullet extends Box{
    constructor(container,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);
        this.div.style.borderRadius="25%";
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        if(this.y<=40){
            this.container.removeChild(this.div);
            let bulletIndex=bulletArray.indexOf(this);
            bulletArray.splice(bulletIndex , 1);
        }
    }
    hitCheck(){
        for(let i=0; i<enemyArray.length;i++){
            let result= collisionCheck(this, enemyArray[i]);
            //이미지가 너무 커서 충돌포인트가 너무 밑에있음. 센서를 달아놨지만 센서랑은 충돌이 안먹음.... 물어보기.
            if(result){
                this.container.removeChild(this.div);
                let bulletIndex=bulletArray.indexOf(this);
                bulletArray.splice(bulletIndex,1);

                this.container.removeChild(enemyArray[i].div);
                let enemyIndex=enemyArray.indexOf(enemyArray[i]);
                enemyArray.splice(enemyIndex,1);

                setScore();
            }

        }
    }
}