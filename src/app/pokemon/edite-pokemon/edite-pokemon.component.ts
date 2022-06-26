import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edite-pokemon',
  template: `
  <h2 class="center">Edition de {{ pokemon?.name}}</h2>

    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" >
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditePokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private PokService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.activeRoute.snapshot.paramMap.get('id');

    if (pokemonId){
      this.pokemon = this.PokService.getPokemonById(+pokemonId);  
      console.log( this.pokemon?.name)
      console.log( this.pokemon?.picture)
    }else{
      this.pokemon = undefined;
    }
   


  }

}
