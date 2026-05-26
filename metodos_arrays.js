let Turma02 = ["Luane", "Rei do Chat", "Jorge_antonio" , "Lia"]








let novaTurma = Turma02.toString()
console.log(Turma02)
console.log(novaTurma);

let Turmajoin = Turma02.join('|')
console.log(Turmajoin);

let remover = Turma02.pop()
console.log(Turma02);
console.log(`Aluno removido:  ${remover}`);

Turma02.push("Roberto Carlos");
console.log(Turma02);

let remover2 = Turma02.shift()

console.log(Turma02),
console.log(`Aluno removido: ${remover2}`)

Turma02.unshift("Gabriel");
console.log(Turma02);

delete Turma02[2]
console.log(Turma02)
Turma02.splice(0,2);
console.log(Turma02);
// extras de ernestos
// var a1=["1",2,3]
// a2=a1
// a2.pop()
// let a1 = ["1",2,3]
// let a2 = [...a1]