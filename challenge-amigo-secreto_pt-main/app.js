let lnomes = [];

function adicionarAmigo() {
    console.log("Adicionando amigo...");

    let nomeInput = document.querySelector("#amigo"); // Obtendo o input corretamente
    let nome = nomeInput.value.trim(); // Pegando o valor do input

    if (nome !== "") {
        lnomes.push(nome); // Adicionando ao array

        let lista = document.querySelector("#listaAmigos");
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);

        // Limpa o campo de input
        nomeInput.value = "";
    } else {
        alert("Escreva um nome antes de adicionar!");
    }
}

function sortearAmigo() {
    let qtdlista = lnomes.length;

    if (qtdlista > 0) {
        let numaleatorio = Math.floor(Math.random() * qtdlista); // Corrigido para evitar "undefined"
        let nomeSorteado = lnomes[numaleatorio]; // Pegando nome correto

        let resultadoLista = document.querySelector("#resultado");
        resultadoLista.innerHTML = ""; // Limpa a lista anterior

        let li = document.createElement("li");
        li.textContent = `Seu amigo secreto é: ${nomeSorteado}`;
        resultado.appendChild(li);
    } else {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
    }
}
