// Overlay effect

const btn = document.getElementById("displaybtn");
const bg = document.getElementById("overlay");
btn.addEventListener("click", (event) => {
  overlay.style.display = "grid";
});
document.addEventListener("click", (event) => {
  //lurt triks for å spesifisere at det er BARE bakgrunnen, og ikke barn av bakgrunnen som dette gjelder for.
  if (event.target === bg) {
    overlay.style.display = "none";
  }
});
