document.addEventListener("DOMContentLoaded", () => {
  let panel = document.querySelectorAll(".visible-pannel");
  let toggle = document.querySelectorAll(".toggle-pannel");
  for (i = 0; i < panel.length; i++) {
    let panels = {
      index: i,
      img: document.querySelectorAll(".visible-pannel img"),
      onOff: true,
      a: panel[i].addEventListener("click", () => {
        if (panels.onOff) {
          toggle[panels.index].setAttribute("class", "toggle-on");
          panels.img[panels.index].src = "asset/remove.svg";
          panels.onOff = false;
        } else {
          toggle[panels.index].setAttribute("class", "toggle-pannel");
          panels.img[panels.index].src = "asset/cross.svg";
          panels.onOff = true;
        }
      }),
    };
  }
});
