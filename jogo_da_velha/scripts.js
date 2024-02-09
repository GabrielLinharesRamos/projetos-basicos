

function muda_jogador(){
    jogador=document.querySelector('#jogador_atual').innerHTML

    if(jogador=='jogador da vez: 1'){
        document.querySelector('#jogador_atual').innerHTML='jogador da vez: 2'
    }else{
        document.querySelector('#jogador_atual').innerHTML='jogador da vez: 1'
    }
}

contador=0
z=false
function olha_se_venceu() {
    var vitorias = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], 
        [1, 5, 9], [3, 5, 7], 
        [1, 4, 7], [2, 5, 8], [3, 6, 9]
    ];
    var celulas = document.querySelectorAll('.celula');
    var conteudos = [];

    celulas.forEach(function(celula) {
        conteudos.push(celula.innerHTML);
    });

    for (var i = 0; i < vitorias.length; i++) {
        var vitoria = vitorias[i];
        var a = conteudos[vitoria[0]-1];
        var b = conteudos[vitoria[1]-1];
        var c = conteudos[vitoria[2]-1];

        if (a && a === b && b === c) {
            alert('Vitória do ' + a + '!');
            z=true
            return true;
            
        }
    }
    contador+=1
    if(contador==9){
        alert("empate")
        return true;
    }
    return false;
}

function coloca_simbolo(conteudo){
    

    simbolo=conteudo.innerHTML
    if(simbolo=='x' || simbolo=='o' || z==true){
        return(alert('jogada invalida'))
    }else{
        jogador=document.querySelector('#jogador_atual').innerHTML
        if (jogador == 'jogador da vez: 1') {
            simbolo = "x";
            conteudo.style.color = "red";
        } else {
            simbolo = "o";
            conteudo.style.color ="white";
        }
    }
    conteudo.innerHTML=simbolo
    muda_jogador()
    olha_se_venceu()

}