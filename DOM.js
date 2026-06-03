
function mudarElemento() {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = "red";
    paragrafo.innerHTML = 'Ernesto Pistola!';
}
function mudarTitulo() {
    let titulo = document.getElementById('titulo');
    titulo.style.color = "blue"; // Adicionei uma cor para diferenciar
    titulo.innerHTML = 'Título Alterado!';
}