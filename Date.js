let data = new Date();

let dia = data.getDate();

let mes = data.getMonth()+1;

let ano = data.getFullYear();

if (dia < 10){
  dia= "0" + dia;
}

if (mes < 10){
  mes= "0" + mes;
}

console.log("Dia atual= ",dia);
console.log("Mês atual= ",mes);
console.log("Ano atual= ",ano);

//data por extenso

const lastDay = new Date(mes,dia,ano);
const lastDayDate = data.toLocaleDateString();
console.log(lastDayDate);
