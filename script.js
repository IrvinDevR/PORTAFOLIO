window.addEventListener("scroll", function(){
   progreso();
})

function progreso() {
   let scroll = document.documentElement.scrollTop;
   console.log(scroll)
   let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let progreso = (scroll/heigth)*100
   document.getElementsByClassName("barra")[0].style.width = progreso+"%"
}
