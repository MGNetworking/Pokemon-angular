import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  {path:'/pokemon-list' , component: ListPokemonComponent},
  {path:'/pokemon-detail/:id' , component: DetailPokemonComponent},
  {path:'' , redirectTo: '/pokemon-list' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
