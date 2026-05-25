
 let contador = 1;
 while (contador <= 10) {
     console.log(contador);
    contador++;
 }

 
 let numero;
 let soma = 0;
 do {
     numero = Number(prompt("Digite um número (0 para sair):"));
     soma += numero;
 } while (numero !== 0);
 alert(`Soma total: ${soma}`);

 
 let numero = Number(prompt("Digite um número para ver a tabuada:"));
 for (let res = 1; res <= 10; res++) {
     alert(`${numero} x ${res} = ${numero * res}`);
}



