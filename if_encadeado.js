let media = 5.8
let faltas = 3
// media >= 7
// media >= 6.5
// faltas < 6 
if (media >= 7 && faltas <= 5) {
    console.log(`Aluno Aprovado!`);
} else if (media >= 6.5 && faltas <= 5) {
    console.log(`Aluno Ap. conselho!`);
} else {
    console.log(`Aluno Reprovado!`);
}