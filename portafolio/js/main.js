
const anima = document.getElementById ("carta-html") 
const anima2 = document.getElementById ("carta-css")
const anima3 = document.getElementById ("carta-js")

window.addEventListener("scroll", () => {
    console.log(window.scrollY)

    if(window.scrollY >= 2700){
        anima.setAttribute("class","animate__animated animate__zoomInUp")
        anima2.setAttribute("class","animate__animated animate__zoomInUp")
        anima3.setAttribute("class","animate__animated animate__zoomInUp")
    }
})
    
const anima4 = document.getElementById ("blandas")

window.addEventListener("scroll", () => {
    console.log(window.scrollY)

    if(window.scrollY >= 2900){
        anima4.setAttribute("class","animate__animated animate__zoomInUp")
    }
})


function activarpanel() {
    const contenedor = document.querySelector(".cont-colors");

    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
}

var link = document.getElementById("filecss");

function dark() {
    link.href="css/styledark.css";
}

function light() {
    link.href="css/stylelight.css";
}

function principal() {
    link.href="css/style.css";
}