var nome = "Eduardo Kreutz Carvalho";
var idade = 29;
var frase = "Japão é muito bom";
var lista = ["maça","pera","lista"];
var fruta = {nome:"maça", cor:"vermelha"}
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva",cor:"roxa"}]

lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.reverse());
console.log(lista.join(" - "))

console.log(fruta.nome)

alert(nome + " tem " + idade + " anos");
alert(idade + idade);
alert(frutas[0].nome)

console.log(nome);
console.log("Recrutador esse é um projeto muito básico para você estar olhando :)");
//o replace não altera a variavel original
console.log(frase.replace("Japão","Brasil"))
console.log(frase.toLocaleUpperCase())