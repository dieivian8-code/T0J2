class Aluno {
 constructor(_nome,_curso,_ra,_ativo,){
     this.nome = _nome
     this.curso = _curso
     this.ra = _ra
      this.ativo = _ativo
    }
    alunofala(){
        return `OoOoOoh Gabriel!!`
    }
}
let aluno1 = new Aluno("Ernesto", "Dev Web",1234, true)
let aluno2 = new Aluno("Allan", "ERP",1235, true)
let aluno3 = new Aluno("MK", "Zendesk",1236, true)

console.log(`Nome Alun@: ${aluno1.nome}`);
console.log(`Curso: ${aluno1.curso}`);
console.log(`Aluno está matrpiculado: ${aluno1.ativo}`);
console.log(`Todo alun@ fala: ${aluno1.alunoFala()}`);
console.log(`======================`);