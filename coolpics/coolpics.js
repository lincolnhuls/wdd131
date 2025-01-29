function Hiding() {
    document.querySelector(".menu").classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        document.querySelector(".menu").classList.remove("hide");
    }
    else {
        document.querySelector(".menu").classList.add("hide");
    }
 }

handleResize();
document.querySelector("button").addEventListener("click", Hiding);
window.addEventListener("resize", handleResize);