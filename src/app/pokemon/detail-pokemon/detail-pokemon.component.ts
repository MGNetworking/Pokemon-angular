import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonListe: Pokemon [];
  pokemon: Pokemon |undefined;

  constructor(
    private ActivRouter: ActivatedRoute, 
    private router: Router,
    private pokService: PokemonService
    ){}

  ngOnInit(): void {
    
    // get Id via path url 
    const id: string|null = this.ActivRouter.snapshot.paramMap.get('id');

    if (id){
      this.pokemon =  this.pokService.getPokemonById(+id);
    }
    

  }


  /**
   * retour vers la liste des pokemon
   */
  goBack(){

    this.router.navigate(['/pokemon-list'])
  }


  /**
   * Aller vers l'éditionn d'un pokemon
   * @param pokemon 
   */
  onEdited(pokemon: Pokemon){
    this.router.navigate(["/pokemon-edite/", pokemon.id]);
  }

}
