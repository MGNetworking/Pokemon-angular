import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  title = 'List-pok';
  pokemonListe: Pokemon [];
  pokemonSelected: Pokemon|undefined ;

  constructor(
    private router: Router , 
    private pokService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonListe = this.pokService.getListPokemon();
    console.table(this.pokemonListe)

    this.pokService.getPokemonListType();
  }

  public selectionPokemon(IdPokemon: number ) : void {

    this.pokemonSelected  = this.pokService.getPokemonById(IdPokemon);
    console.log(`Le pokémon sélectionner : ${this.pokemonSelected?.name}`)

  }

  /**
   * Aller vers la carte d'identitification
   */
  public getPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon-detail/', pokemon.id])
  }

}
