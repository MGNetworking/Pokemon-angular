import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonListe: Pokemon []= POKEMONS;
  pokemon: Pokemon |undefined;

  constructor(private ActivRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    // get Id via path url 
    const pokemonId: string|null = this.ActivRouter.snapshot.paramMap.get('id');

    if (pokemonId){
      this.pokemon = this.pokemonListe.find(pk => pk.id == +pokemonId)
    }
    

  }


  /**
   * retour vers la liste des pokemon
   */
  goBack(){

    this.router.navigate(['/pokemon-list'])
  }

}
