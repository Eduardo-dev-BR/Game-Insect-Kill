//Setar fora do escopo de variavel para utilizar depois
var altura = 0
var largura = 0

//Criar funcao para mapear a tela
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight 
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Criar funcao para que posicao randomica aconteca
function posicaoRandomica(){

    //Criar nos dois eixos a funcao randomica multiplicando pelo valor da variavel(definido pelo inner) - 90
    //90 é o valor da maior imagem (50px), impedindo com que a mesma passe do limite da tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //remover o elemento anterior caso já exista
        var el = document.getElementById('mosquito')
        
        if(el){
            el.remove()
        }

    //limitar para apenas dentro do quadro, impedindo valores negativos
    //lembrando que parte de left 0 e top 0 até o maximo da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)


    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png' 
    mosquito.className = tamanhoAletorio() +' '+ ladoAleatorio()//Setar a classe com na funcao de estilo aleatorio
    //concatenar o espaco para que nao haja conflito no elemento html entre as classes
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    //criar um identificador único para o elemento
    mosquito.id = 'mosquito'
    
    document.body.appendChild(mosquito)


}   

//Criar uma funcao que seta o tamanho aleatoriamente
function tamanhoAletorio(){
    //Valor randomico de 1 a 3 que definirá qual a classe aplicada no elemento
    var classe = Math.floor(Math.random() * 3)
    
    //Aplicar um switch para definir, caso seja um dos 3 valores qual a classe a ser aplicada
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}