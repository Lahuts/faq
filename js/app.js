document.addEventListener("DOMContentLoaded", e => {
    let img = document.querySelectorAll(".visible-pannel");
    let toggle = document.querySelectorAll(".toggle-pannel");
    for(i = 0; i < img.length; i++) {
        let u = {
            d: i,
            c: document.querySelectorAll(".visible-pannel img"),
            b:true,
            a: img[i].addEventListener("click",()=>{
                if(u.b){
                    toggle[u.d].setAttribute("class","toggle-on");
                    u.c[u.d].src = "asset/remove.svg";
                    u.b = false;
                }else{
                    toggle[u.d].setAttribute("class","toggle-pannel");
                    u.c[u.d].src = "asset/cross.svg";
                    u.b = true;
                }
            }),
        }
    }
});
