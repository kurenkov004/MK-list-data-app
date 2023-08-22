// Charmander is #4, Totodile is #158, Persian is #53 - for future reference, because I'm clueless about Pokemon.

let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 
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
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);
      listOfPokemon.appendChild(listItem);
      button.addEventListener('click', function () {
        showDetails(pokemon);
      });
    }
    // function showDetails (pokemon) {
    //   console.log(pokemon);
    // }

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

    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function(){
        console.log(item);
      });
    }
    return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    };
  
  })();
  
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
})


// function showDetails(pokemon) {
//   loadDetails(pokemon).then(function() {
//     console.log(pokemon);
//   });
// }



      // function listNames(_pokemon) {
      //   addListItem(item);
      // document.write('<p id="list_items">' + item.name + ' (height) ' + item.height + '</p>');





/*for (let i = 0; i < pokemonList.length; i++) {
  if(i == 1) {
    document.write('<p id="list_items">' + pokemonList[i].name + ' (height) ' + pokemonList[i].height + '  - Wow, that\'s dangerous! </p>');
  }else{
    document.write('<p id="list_items">' + pokemonList[i].name + ' (height) ' + pokemonList[i].height);
  }
} 
*/

