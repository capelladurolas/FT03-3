const form = document.getElementById("accountForm");

form.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let telefone = document.getElementById("telefone").value.trim();
let morada = document.getElementById("morada").value.trim();
let nif = document.getElementById("nif").value.trim();
let observacoes = document.getElementById("observacoes").value.trim();

if(nome === "" || email === "" || telefone === "" || morada === "" || nif === ""){
alert("Preencha todos os campos obrigatórios.");
return;
}

if(telefone.length !== 9 || isNaN(telefone)){
alert("Telefone inválido. Deve ter 9 números.");
return;
}

if(nif.length !== 9 || isNaN(nif)){
alert("NIF inválido. Deve ter 9 números.");
return;
}

console.log("Conta criada com sucesso!");
console.log({
nome: nome,
email: email,
telefone: telefone,
morada: morada,
nif: nif,
observacoes: observacoes
});

form.reset();

});