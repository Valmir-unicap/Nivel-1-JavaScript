function menu(){
  console.log("Calculadora básica");
  console.log("");
  console.log("Menu");
  console.log("");
  console.log("1- Somar");
  console.log("2- Subtração");
  console.log("3- Divisão");
  console.log("4- Multiplicacão");
  console.log("0- Sair do programa");
}

function validar(numero){
  while(numero<0 || numero>4){
    console.log("Número inválido");
    numero= prompt("Digite um número: ");
  }
  return numero;
}

menu();
let escolha;
escolha= prompt("Escolha uma opção acima: ");
escolha= validar(escolha);
if(escolha==1){
    let numero1, numero2;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    const somar= numero1+numero2;
    console.log("O resultado= ",somar);
} if(escolha==2){
    let numero1, numero2;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    const subtracao= numero1 - numero2;
    console.log("O resultado= ",subtracao);
}else if(escolha==3){
    let numero1, numero2;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    const divisao= numero1 / numero2;
    console.log("O resultado= ",divisao);
}else if(escolha==4){
    let numero1, numero2;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    const multiplicacao= numero1 * numero2;
    console.log("O resultado= ",multiplicacao);
}else{
    console.log("Fim do programa! @Developer Valmir Júnior");
}
