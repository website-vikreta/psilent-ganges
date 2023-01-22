function runOnScroll() {
   var h1 = document.getElementById("gototop");
   if (document.documentElement.scrollTop >= 500) {
      h1.style.opacity = 1;
      h1.style.visibility = "visible";
   } else {
      h1.style.opacity = 0;
      h1.style.visibility = "hidden";
   }
};
window.addEventListener("scroll", runOnScroll);