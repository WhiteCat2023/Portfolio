const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");
            
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})
                    
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))