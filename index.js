// Overlay effect
//Fetching elements
const btn = document.getElementById("displaybtn");
const bg = document.getElementById("overlay");

//eventlistener
btn.addEventListener("click", (event) => {
  overlay.style.display = "grid";
});
//eventlistener with high spesificity for a div
document.addEventListener("click", (event) => {
  //lurt triks for å spesifisere at det er BARE bakgrunnen, og ikke barn av bakgrunnen som dette gjelder for.
  if (event.target === bg) {
    overlay.style.display = "none";
  }
});
