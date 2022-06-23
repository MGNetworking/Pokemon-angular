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


  ngOnInit(): void {
    

  }
}
