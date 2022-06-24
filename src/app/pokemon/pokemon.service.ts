import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getListPokemon(): Pokemon []{
    return POKEMONS;
  }

  getPokemonById(IdPokemon: number): Pokemon|undefined {

    return POKEMONS.find(pk => pk.id == IdPokemon )
  }

  //getPokemonListType(): string[]{
  //}

}
