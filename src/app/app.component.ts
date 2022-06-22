import { Component , OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})

export class AppComponent implements OnInit {
  
  title = 'ng-pokemon-app';
  pokemonListe: Pokemon []= POKEMONS;

  idSelected: number  = 0;

  pokemonSelected: Pokemon|undefined ;

  ngOnInit(): void {
    console.table(this.pokemonListe)

    if (this.idSelected){
      this.idSelected = 0;
    }

  }

  selectionPokemon(IdPokemon: string ) : void {

    this.pokemonSelected = this.pokemonListe.find(pok=> pok.id == Number(IdPokemon));

  }

}
