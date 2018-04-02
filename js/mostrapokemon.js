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
      $('.modal').modal({ show: true });
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
  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  let dialog = document.createElement('div');
  dialog.classList.add('modal-dialog');

  let content = document.createElement('div');
  content.classList.add('modal-content');

  let header = document.createElement('div');
  header.classList.add('modal-header');
  content.appendChild(header);

  let title = document.createElement('h5');
  title.classList.add('modal-title');
  title.innerText = `${pokemon.name.toUpperCase()} - #${pokemon.id}`;
  header.appendChild(title);

  let body = document.createElement('div');
  body.classList.add('modal-body');
  content.appendChild(body);

  let row = document.createElement('div');
  row.classList.add('row');

  let colImg = document.createElement('div');
  colImg.classList.add('col-4', 'text-center');
  colImg.style.alignSelf = 'center';

  let colContent = document.createElement('div');
  colContent.classList.add('col-8');

  let pokeName = document.createElement('h1');
  pokeName.innerText = pokemon.name;
  colContent.appendChild(pokeName);

  let pokeImg = document.createElement('img');
  pokeImg.src = pokemon.sprites.front_default;
  pokeImg.classList.add('img-fluid');
  colImg.appendChild(pokeImg);

  let pokeTypesList = document.createElement('ul');
  pokemon.types.map(type => {
    let pokeType = document.createElement('li');
    pokeType.innerText = type.type.name;
    pokeTypesList.appendChild(pokeType);
  });
  colContent.appendChild(pokeTypesList);

  let pokeHeight = document.createElement('p');
  pokeHeight.innerText = pokemon.height;
  pokeHeight.style.marginBottom = '5px';

  let heightTitle = document.createElement('strong');
  heightTitle.innerText = 'Altura: ';
  pokeHeight.prepend(heightTitle);
  colContent.appendChild(pokeHeight);

  let pokeWeight = document.createElement('p');
  pokeWeight.innerText = pokemon.weight;
  pokeWeight.style.marginBottom = '5px';

  let weightTitle = document.createElement('strong');
  weightTitle.innerText = 'Peso: ';
  pokeWeight.prepend(weightTitle);
  colContent.appendChild(pokeWeight);

  let pokeId = document.createElement('p');
  pokeId.innerText = pokemon.id;
  pokeId.style.marginBottom = '5px';

  let idTitle = document.createElement('strong');
  idTitle.innerText = 'ID: ';
  pokeId.prepend(idTitle);
  colContent.appendChild(pokeId);

  row.appendChild(colImg);
  row.appendChild(colContent);
  body.appendChild(row);
  dialog.appendChild(content);
  modal.appendChild(dialog);

}