function myFunction(x) {
   x.classList.toggle("change");
   var bar1 = document.querySelector(".bar1");
   var bar2 = document.querySelector(".bar2");
   var bar3 = document.querySelector(".bar3");
   bar1.classList.toggle("bartoggle");
   bar2.classList.toggle("bartoggle");
   bar3.classList.toggle("bartoggle");
   a.style.backgroundColor = "#04091ecb";
   a.style.paddingBottom = "15px";
}
var a = document.querySelector(".scroll-effect");
window.onscroll = function() {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
   ) {
      a.style.position = "fixed";
      a.stye.width = "100%";
      a.style.top = "0";
      a.style.zIndex = "1";
      a.style.backgroundColor = "#04091ecb";
      a.style.paddingBottom = "15px";
   } else {
      a.style.backgroundColor = "transparent";
      a.style.paddingBottom = "0px";
   }
}
