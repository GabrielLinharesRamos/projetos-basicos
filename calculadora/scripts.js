function inserir(num){
    if(document.querySelector('#tela').innerHTML.length>=12){
        return
    }
    document.querySelector('#tela').innerHTML+=num;
}

function limpa_tudo(){
    document.querySelector('#tela').innerHTML='';
}

function deleta(){
    let tela=document.querySelector('#tela').innerHTML
    document.querySelector('#tela').innerHTML=tela.substring(0,tela.length-1)
}

function somar(){
    if(document.querySelector('#tela').innerHTML.length>=12){
        return
    }
    let tela=document.querySelector('#tela').innerHTML
    if(tela){
        document.querySelector('#tela').innerHTML=eval(tela)
    }else{
        document.querySelector('#tela').innerHTML='error'
    }
}