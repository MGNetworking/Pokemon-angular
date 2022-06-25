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

  /**
   * 
   * @returns La list de tout les types de pokemon
   */
  getPokemonListType(): string[]{

    let type: string[] = [];

    POKEMONS.forEach(function getType(pok){

        // get chaque type 
        for(let arg of pok.types){
          // -1 si existe pas  
          if (type.indexOf(arg) == -1){
            type.push(arg.toString());
          }

        }
      
    })
    
    console.log("Liste de tous les types des pokemons")
    console.table(type)
  
    return type;
  }

};
