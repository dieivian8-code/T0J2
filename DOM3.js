const calcularMedia = ()  => { 
let n1 = Number(document.querySelector('#Nota1').value)
let n2 = Number(document.querySelector('#Nota2').value)
const texto = document.querySelector('h3')
let media = (n1 + n2)/2
texto.innerHTML = `sua média é: ${média}`
}
    