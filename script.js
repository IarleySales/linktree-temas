const botao = document.getElementById("tema");

botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "☀️";
    } else {
        botao.textContent = "🌙";
    }

});