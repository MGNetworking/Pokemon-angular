import { Component , OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})

export class AppComponent implements OnInit {
  
  title = 'ng-pokemon-app';
  pokemonListe: Pokemon []= POKEMONS;

  pokemonSelected: Pokemon|undefined ;

  ngOnInit(): void {
    console.table(this.pokemonListe)

  }

  selectionPokemon(IdPokemon: number ) : void {

    this.pokemonSelected = this.pokemonListe.find(pok=> pok.id == IdPokemon);
    console.log(`Le pokémon sélectionner : ${this.pokemonSelected?.name}`)

  }

}
