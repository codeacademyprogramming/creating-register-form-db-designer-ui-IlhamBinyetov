window.addEventListener("contextmenu", function(e){
    e.preventDefault();
    let element = document.querySelector("#menu");
    element.style.top = e.offsetY + "px";
    element.style.left = e.offsetX + "px";

})