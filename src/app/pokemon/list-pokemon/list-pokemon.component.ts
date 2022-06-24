import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  title = 'List-pok';
  pokemonListe: Pokemon []= POKEMONS;
  pokemonSelected: Pokemon|undefined ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.table(this.pokemonListe)
  }

  public selectionPokemon(IdPokemon: number ) : void {

    this.pokemonSelected = this.pokemonListe.find(pok=> pok.id == IdPokemon);
    console.log(`Le pokémon sélectionner : ${this.pokemonSelected?.name}`)

  }

  /**
   * Aller vers la carte d'identitification
   */
  public getPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon-detail/', pokemon.id])
  }

}
