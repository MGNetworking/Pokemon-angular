import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    private pokeService: PokemonService, 
    private router: Router) {}

  ngOnInit(): void {
    this.types = this.pokeService.getPokemonListType();
  }

  /**
   * vérifi la possétion d'un type pour un pokémon
   * @param type string type du pokemon
   * @returns true si le pokemon possède le type recherché
   */
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    return true;
  }

  /**
   * Gestion de l'évenement de la case type coché / décoché par l'utilisateur.
   * @param $event
   * @param type
   */
  selectType($event: Event, type: string) {
    const ischecked = ($event.target as HTMLInputElement).checked;

    // si élément type add
    if (ischecked) {
      this.pokemon.types.push(type);

      // si élément type delete
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  /**
   * soumission du formulaire et redirection vers la page 
   * de la carte du pokemon.
   */
  onSubmit() {
    console.log("Submit form !!!");
    this.router.navigate(["/pokemon", this.pokemon.id]);
  }

}
