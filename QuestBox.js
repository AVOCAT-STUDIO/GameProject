class QuestBox extends Box{
    constructor(container,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);
        this.div.style.border="5px solid darkblue";
        this.div.style.borderRadius="15%";
        this.div.style.opacity=0.7;
        this.div.style.fontSize=50+"px";
        this.div.innerText=numberArray[getRandom(10)]+"+"+numberArray[getRandom(10)]+"=?";
        this.div.style.display="none";
    }

    slideDown(){
        $(this.div).slideDown("slow");
    }
    slideUp(){
        $(this.div).slideUP("slow");
    }

}