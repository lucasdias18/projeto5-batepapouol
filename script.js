function inicio() {


    let input = document.querySelector('.inicial input')
    let nome = input.value
    console.log(nome)
    const dados_nome = {name: nome}
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', dados_nome )
    requisicao.then(Sucesso)
    requisicao.catch(Erro)

    function Sucesso() {
        console.log('sucesso')
        let menu1 = document.querySelector('.inicial');
        menu1.classList.add('escondido');
        let menu2 = document.querySelector('.principal');
        menu2.classList.remove('escondido');

        const messages = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
        messages.then(Resposta)
        console.log(messages)
        function Resposta(resposta) {
            let mensagens = document.querySelector('.principal main')
            let i=0;
            while (i<messages.length) {
                mensagens.innerHTML += `<div class="mensagem">
                                            <span>messages[i].time</span>
                                        </div>`;
                i++;
            
            }
        }
    }

    function Erro() {
        console.log('erro')
    }
}

