
function botao(){
    document.getElementById("clicou").innerHTML = "Obrigado por clicar"
}
function botao2(){
    window.open("https://google.com")
    //windor.location.href = "https://google.com"
}
function trocar(element){
    //document.getElementById("mouse").innerHTML = "obrigado por passar o mouse"
    element.innerHTML = "obrigado por passar o mouse"
}

function voltar(element){
    //document.getElementById("mouse").innerHTML = "passe o mouse aqui"
    element.innerHTML = "passe o mouse aqui"
}
function load(){
    alert("Pagina carregada")
}
function change(element){
    console.log(element.value)
}
/*
function soma(n1, n2){
    return n1+n2
}

function setReplace(frase, nome, novo){
    return frase.replace(nome,novo)
}

function valida_idade(idade){
    if(idade >= 18){
        return true
    } else {
        return false
    }
}







var idade = prompt("qual sua idade")
if (idade >= 18){
    alert("maior de idade")
} else{
    alert("menor de idade")
}

var count = 0
while (count < 5){
    console.log(count)
    count++
}
var count
for (count=0; count <= 5; count++){
    alert(count)
} 

var d = new Date()
alert(d.getMonth() + 1)

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
*/