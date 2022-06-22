import { Component , OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome world {{pokemonListe[2].name}} </h1>
  <p>Pokemon de type {{pokemonListe[2].types }}</p>
  <p>Date de création de l'objet {{pokemonListe[2].created }}</p>`


})

export class AppComponent implements OnInit {

  title = 'ng-pokemon-app';
  pokemonListe: Pokemon [];

  ngOnInit(): void {
    console.log(`initialisation du composant racine : AppComponent `);
    this.pokemonListe = POKEMONS;
    console.table(this.pokemonListe)
    this.selectionPokemon(this.pokemonListe[0])

  }

  selectionPokemon(pokemon: Pokemon ) {
    console.log(`Vous avez choisi ${pokemon.name}`)
  }

}
