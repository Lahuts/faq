document.addEventListener("DOMContentLoaded", e => {
    
    class ToggleItem{
        constructor(img,pnl){
            this.img = img;
            this.pnl = pnl;
            this.onOff = true;
            this.ajoutEvent(img,pnl);
        };
        setOnOff(onOff){
            this.onOff = onOff;
        }
        changeAttrib(pnl,type,value){
            pnl.setAttribute(type,value);
        }
        ajoutEvent(img,pnl){
            img.addEventListener("click",()=>{
                if(this.onOff){
                    this.changeAttrib(pnl,"class","toggle-on");
                    this.setOnOff(false);
                    this.img.src = "asset/remove.svg";

                }else{
                    this.changeAttrib(pnl,"class","toggle-pannel");
                    this.setOnOff(true);
                    this.img.src = "asset/cross.svg";
                }
                
            });
        }
    }

    let img = document.querySelectorAll("img");
    let pnl = document.querySelectorAll(".toggle-pannel");
    for(i = 0;i<img.length;i++){
        let Itms = new ToggleItem(img[i], pnl[i],img.src);
    }

});
