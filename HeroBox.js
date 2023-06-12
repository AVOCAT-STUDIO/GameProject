//로켓사진과 아이 사진을 통쨰로 들고다닐  큰박스하나
class HeroBox extends Box {
    constructor(container, width, height, x, y, velX, velY, bgcolor, text) {
        super(container, width, height, x, y, velX, velY, bgcolor, text);
        //로켓이미지 생성
        this.rocket;
        this.rocket = document.createElement("img");
        this.rocket.src = "./images/rocket.png";
        this.rocket.style.width = this.width + "px";
        this.rocket.style.height = this.height + "px";
        this.rocket.style.position = "absolute";
        this.rocket.style.left = 0 + "px";
        this.rocket.style.top = 0 + "px";
        this.div.appendChild(this.rocket);

        //로켓위에 아이 사진 생성
        this.pic;
        this.pic = document.createElement("img");
        this.pic.src = "./images/jaein.png";
        this.pic.style.width = 80 + "px";
        this.pic.style.height = 80 + "px";
        this.pic.style.position = "absolute";
        this.pic.style.left = 60 + "px";
        this.pic.style.top = 40 + "px";
        this.pic.style.transform = "rotate("+r+"deg)";
        this.div.appendChild(this.pic);
    }

    picEffect() {
        if (flag2) {
            r-=10;
        } else {
            r+=10;
        }
        if (r<=-30 || r>=31) {
            flag2 = !flag2;
        }
        this.pic.style.transform = "rotate("+r+"deg)";
    }

}
