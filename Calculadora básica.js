//falta consertar a soma
console.log("Calculadora básica");
console.log("");
console.log("Menu");
console.log("");
console.log("1- Somar");
console.log("2- Subtração");
console.log("3- Divisão");
console.log("4- Multiplicacão");
console.log("0- Sair do programa");
var escolha;
escolha= prompt("Escolha uma opção acima: ");
while(escolha<0 && escolha>4){
    console.log("Opção inválida");
    escolha= prompt("Escolha uma opção acima: ");
}
if(escolha==1){
    var numero1, numero2, soma;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    soma= numero1 + numero2;
    console.log("O resultado= ",soma);
} if(escolha==2){
    var numero1, numero2, subtracao;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    subtracao= numero1 - numero2;
    console.log("O resultado= ",subtracao);
}else if(escolha==3){
    var numero1, numero2, divisao;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    divisao= numero1 / numero2;
    console.log("O resultado= ",divisao);
}else if(escolha==4){
    var numero1, numero2, multiplicacao;
    numero1= prompt("Digite o primeiro número: ");
    numero2= prompt("Digite o segundo número: ");
    multiplicacao= numero1 * numero2;
    console.log("O resultado= ",multiplicacao);
}else{
    console.log("Fim do programa! @Developer Valmir Júnior");
}
