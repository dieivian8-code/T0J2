// let alunos = ["Arroz", "joão", "matador", "almeron", "paloma", "Yuri", "hollywood", "Tonia"]

// // Valor do array
// // Index - 0 1 2
// // Array 

// alunos.forEach(function confirmarEmail(nome) {
//     console.log(`E-mail enviado para ${nome}`);
// })


// alunos.forEach((nome,numero, turma)=> {
//     console.log(`E-mail enviado para ${nome}`);
//     // console.log(`Número da chamada: ${numero+1}`);
//     console.log(`Número da chamada: ${numero}`);
//     console.log(`Turma: ${turma}`);
//     console.log('-------------------');
// }

let  frutas = ["manga,","maça","abacaxi","kiwi","pitawa","abacate"]
frutas.forEach(function(favorita,i,all){
console.log(`fruta favoritas: ${favorita}`);
console.log(`número da frutas: ${i}`);
console.log(`todas as frutas: ${all}`);
})