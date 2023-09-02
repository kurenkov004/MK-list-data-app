// Charmander is #4, Totodile is #158, Persian is #53 - for future reference, because I'm clueless about Pokemon.

let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#pokeModal');
 
    function getAll () {
      return pokemonList;
    }
    function add (item) {
      pokemonList.push(item);
    }

    function addListItem (pokemon) {
      let listOfPokemon = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      listItem.setAttribute('id', 'show-modal')
      listItem.classList.add('.list-group-item');
      button.innerText = pokemon.name;
      button.classList.add('btn');
      button.classList.add('pokemon-button');
      button.classList.add('btn-dark');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#pokeModal');

      // optional styling
      button.style.fontVariant = 'small-caps';


      listItem.appendChild(button);
      listOfPokemon.appendChild(listItem);
      button.addEventListener('click', function () {
        showDetails(pokemon);
      });
    }


    function loadList() {
      return fetch(apiUrl).then(function(response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function(e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function(details){
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showModal (item) {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');
      let modalHeader = $('.modal-header');

      modalTitle.empty();
      modalBody.empty();

    let contentName = $('<h1>' + item.name + '</h1>');
    
    let contentImage = $('<img class="modal-img" style="width:50%">');
    contentImage.attr('src', item.imageUrl);

    let contentHeight = $('<p>' + 'height : ' + item.height + '</p>');

    modalTitle.append(contentName);
    modalBody.append(contentImage);
    modalBody.append(contentHeight);
    }

    let dialogPromiseReject;

    function hideModal () {
      modalContainer.classList.remove('is-visible');
      modalContainer.innerHTML = '';

      if (dialogPromiseReject) {
        dialogPromiseReject();
        dialogPromiseReject = null;
      }
    }
    
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    })

    // modalContainer.addEventListener('click', (e) => {
    //   let target = e.target;
    //   if (target === modalContainer) {
    //     hideModal();
    //   }
    // })

    function showDetails(item) {
      loadDetails(item).then(function () {
        showModal (item);
      });
    }


     
    return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
    };
   
  })();
  
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
})
          


