function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)

   const xhr = new XMLHttpRequest();
    //define opções da requisição
    xhr.open('GET', url, true);
    //envia requisição para a api
    xhr.send();
    //trata os dados de maneira assincrona 
    xhr.onload = function(e) {
      //salva resposta da api em uma variavel
      //e transforma resposta em um JSON válido
      const pokemon = JSON.parse(xhr.response);
      populaModal(pokemon);
  }
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO

     let modal = document.querySelector('.modal');
}