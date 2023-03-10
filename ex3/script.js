let triangulo = document.querySelectorAll(".square");
const body = document.querySelector("body");

triangulo.forEach(quadrado => {
    quadrado.addEventListener("mouseover", () => {
        const cor = quadrado.id;

        if (quadrado.classList.contains(cor)) {
            body.style.setProperty("--primary-color", cor)
        }
    })
})