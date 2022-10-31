function inicio() {
    let menu1 = document.querySelector('.inicial');
    menu1.classList.add('escondido');
    let menu2 = document.querySelector('.principal');
    menu2.classList.remove('escondido');

    let input = document.querySelector('.inicial input')
    let nome = input.value
    console.log(nome)
    const dados_nome = {name: nome}
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', dados_nome )
    requisicao.then(Sucesso)
    requisicao.catch(Erro)
}

