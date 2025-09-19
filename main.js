//  <!-- ✅ Hamburger toggle -->
const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("navlist-active");
    hamburger.classList.toggle("active");
});