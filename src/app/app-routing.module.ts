import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesListComponent
  },
  {
    path: 'detail/:id',
    component: HeroeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
