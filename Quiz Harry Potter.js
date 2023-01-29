function menu(){
    alert("Quiz Harry Potter\n \n 1- Jogar\n 0- Sair");
  }
  
  
  function pergunta1(){
    alert("Quem foi o personagem que morreu no cálice de fogo?\n \n 1- Draco Malfoy\n 2- Cedrico Diggory\n 3- Luna Lovegood\n 4- Severo Snape");
    let escolha1;
    escolha1 = prompt("Escolha uma opcao: ");
    escolha1= parseInt(escolha1);
    validarPerguntas(escolha1);
    if(escolha1==2){
      alert("Voce acertou!");
    }else{
      alert("Voce errou!\n Resposta= Cedrico Diggory");
    }
  }
  
  
  function pergunta2(){
    alert("Qual era a profissão dois pais da Hermione?\n \n 1- Professors de Hogwarts\n 2- Enfermeiros\n 3- Trabalhavam no ministerio da magia\n 4- Dentistas");
    let escolha2;
    escolha2= prompt("Escolha uma opcao: ");
    escolha2= parseInt(escolha2);
    validarPerguntas(escolha2);
    if(escolha2==4){
      alert("Voce acertou!");
    }else{
      alert("Voce errou!\n Resposta= Dentista ");
    }
  }


  function pergunta3(){
    alert("Qual foi o local que a murta que geme morreu?\n \n 1- No Quadriboll\n 2- Na biblioteca\n 3- Dentro do box do banheiro\n 4- Na sala comunal da Sonserina");
    let escolha3;
    escolha3= prompt("Escolha uma opcao: ");
    escolha3= parseInt(escolha3);
    validarPerguntas(escolha3);
    if(escolha3==3){
      alert("Voce acertou!");
    }else{
      alert("Voce errou!\n Resposta= Dentro do box do banheiro ");
    }
  }
  
  
  function pergunta4(){
    alert("Qual era a casa que minerva mcgonagall comandava?\n \n 1- Grifinoria \n 2- Sonserina\n 3- Lufa-Lufa\n 4-Corvinal");
    let escolha4;
    escolha4= prompt("Escolha uma opcao: ");
    escolha4= parseInt(escolha4);
    validarPerguntas(escolha4);
    if(escolha4==1){
      alert("Voce acertou!");
    }else{
      alert("Voce errou!\n Resposta= Grifinoria ");
    }
  }
  
  
  function pergunta5(){
    alert("Quem matou Olho Tonto?\n \n 1- Voldemort\n 2- Lucio Malfoy\n 3- Belatriz\n 4- Snape");
    let escolha5;
    escolha5= prompt("Escolha uma opcao: ");
    escolha5= parseInt(escolha5);
    validarPerguntas(escolha5);
    if(escolha5==1){
      alert("Voce acertou!");
    }else{
      alert("Voce errou!\n Resposta= Voldemort");
    }
  }


  function validar(escolha){
    while(escolha<0 || escolha>1){
      alert("Opcao inválida! Tente novamente!");
      escolha= prompt("Escolha uma opcao: ");
      escolha= parseInt(escolha);
    }
    return escolha;
  }
  
  
  function validarPerguntas(escolha){
    while(escolha<0 || escolha>4){
      alert("Opcao inválida");
      escolha= prompt("Tente novamente!");
      escolha= parseInt(escolha);
    }
    return escolha;
  }
  
  
  //main
  menu();
  escolha= prompt("Escolha uma opcao: ");
  escolha= parseInt(escolha);
  validar(escolha);
  while(escolha==1){
      pergunta1();
      pergunta2();
      pergunta3();
      pergunta4();
      pergunta5();
      break;
  }
alert("Fim do programa! @Developer Valmir Junior");
