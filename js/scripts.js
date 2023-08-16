// Charmander is #4, Totodile is #158, Persian is #53 - for future reference, because I'm clueless about Pokemon.

let pokemonList = [
  {name: 'Charmander', type: ['fire', 'lizard'], height: 0.6 },
  {name: 'Totodile', type: ['water', 'biting'], height: 0.6 },
  {name: 'Persian', type: ['cat', 'limber'], height: 1}
];

pokemonList.forEach(listNames);
  function listNames(item) {
    document.write('<p id="list_items">' + item.name + ' (height) ' + item.height + '</p>');
  }







/*for (let i = 0; i < pokemonList.length; i++) {
  if(i == 1) {
    document.write('<p id="list_items">' + pokemonList[i].name + ' (height) ' + pokemonList[i].height + '  - Wow, that\'s dangerous! </p>');
  }else{
    document.write('<p id="list_items">' + pokemonList[i].name + ' (height) ' + pokemonList[i].height);
  }
} 
*/

