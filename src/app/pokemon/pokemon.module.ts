import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorTypePipe } from './pokemon-color-type.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditePokemonComponent } from './edite-pokemon/edite-pokemon.component';


const pokemanRouter: Routes = [
  {path:'pokemon-list' , component: ListPokemonComponent},
  {path:'pokemon-edite/:id' , component: EditePokemonComponent},
  {path:'pokemon-detail/:id' , component: DetailPokemonComponent},
];



@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonColorTypePipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditePokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemanRouter)
  ]
})
export class PokemonModule { }
