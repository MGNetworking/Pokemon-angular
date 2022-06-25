import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styles: [],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;

  types: string[];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    // get list pokemon
    //this.pokemon = this.pokeService.getListPokemon();
  }

  /**
   * 
   * @param type string type du pokemon
   * @returns true si le pokemon possède le type recherché 
   */
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    return true;
  }

  selectType($event: Event, type: string) {}

  /**
   * soumission du formulaire
   */
  onSubmit() {}
}
