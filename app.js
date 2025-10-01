function criarCartao(categoria, pergunta,   resposta) {
    let container = document. getElementById ('container')
    let cartao = document. createElement( 'article')
    cartao.className = 'cartao'

    cartao.innerHTML = 
    <div class="cartao_conteudo">
                    <h3> MATEMÁTICA básica </h3>
                    <div class="cartao_conteudo_pergunta">
                        <p> 1 ) QUANTO É 1+1? </p>
                    </div>
                    <div class="cartao_conteudo_pergunta">
                        <p> 2 </p>
                    </div>
                </div>
                container.appendChild(cartao)
    
                let respostaEstaVisivel= false
                function viraCartao(){
                }
                 respostaEstaVisivel = !respostaEstaVisivel
                 let respostaEstaVisivel = true
            }