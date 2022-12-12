function Person (name, idade, sexo, hobbie) {
    this.name = name
    this.idade = idade
    this.sexo = sexo
    this.hobbie = hobbie
    
    this.beber = function(){
        return "tomando uma cervejinha"
    }
}

const construtor1 = new Person("zeca pagodinho",26,"masculino","beber até virar o dia.")
console.log(construtor1)

const construtor2 = new Person("Justin",29,"masculino","cantar")
console.log(construtor2)
console.log(construtor2.beber())

