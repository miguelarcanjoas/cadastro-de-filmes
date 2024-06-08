//cria um molde que posteriormente irá receber atributos proprios 
class filme{
    constructor(nomeFilme, anoFilme, diretorFilme){
        this.nome = nomeFilme;
        this.ano = anoFilme;
        this.diretor = diretorFilme;
    }
}

//cria um evento do tipo onclick para o botâo no HTML que será pressionado pelo usuario
let addFilmeBtn = document.getElementById("addFilme");
addFilmeBtn.addEventListener("click",criarNovoFilme);


//função que irá criar um filme com base nos atributos fornecidos pelo usuario. EX: titulo, diretor e ano.

function novoFilme(newNomeFilme,newAnoFilme,newDiretorFilme){
    let newFilme = new filme(newNomeFilme,newAnoFilme,newDiretorFilme);
    return newFilme
}

//função que irá mostrar o novo filme criado na interface usando o HTML
function mostrarNovoFilme(filme){
    const outFilme = document.getElementById('lista');
    let novoParagrafo = document.createElement('p');
    novoParagrafo.innerHTML = (`${filme.nome} - ${filme.diretor} (${filme.ano}) <br>` );
    outFilme.appendChild(novoParagrafo);
}

//função que coleta e preenche os atributos das outras funções com argumentos que são fornecidos pelo usuario 
function criarNovoFilme(){
   let nomeFilme = document.getElementById('titulo').value;
   let anoFilme = document.getElementById('ano').value;
   let diretorFilme = document.getElementById('diretor').value;
   let novoParagrafo = document.createElement('p');
   if(nomeFilme&&anoFilme&&diretorFilme != null){
   let filme = novoFilme(nomeFilme, anoFilme, diretorFilme);
   
   mostrarNovoFilme(filme,);
   }
}
