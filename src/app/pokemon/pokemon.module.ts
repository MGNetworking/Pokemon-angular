import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonColorTypePipe } from './pokemon-color-type.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const pokemanRouter: Routes = [
  {path:'pokemon-list' , component: ListPokemonComponent},
  {path:'pokemon-detail/:id' , component: DetailPokemonComponent},
];



@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonColorTypePipe,
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemanRouter)
  ]
})
export class PokemonModule { }
