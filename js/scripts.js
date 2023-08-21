// Charmander is #4, Totodile is #158, Persian is #53 - for future reference, because I'm clueless about Pokemon.

let pokemonRepository = (function(){
  let pokemonList = [
    {name: 'Charmander', type: ['fire', 'lizard'], height: 0.6 },
    {name: 'Totodile', type: ['water', 'biting'], height: 0.6 },
    {name: 'Persian', type: ['cat', 'limber'], height: 1}
  ];
   
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
        showDetails(pokemon.name);
      });
    }
    function showDetails (pokemon) {
      console.log(pokemon);
    }
    return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    }
  
  })();
  
  
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)

});
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

