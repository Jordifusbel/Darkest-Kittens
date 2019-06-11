import { HomeComponent } from './components/home/home.component';
import { ScienceComponent } from './components/science/science.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { QuestsComponent } from './components/quests/quests.component';
import { KittensComponent } from './components/kittens/kittens.component';
import { WorkshopComponent } from './components/workshop/workshop.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // TODO : Homecomponent lore
  { path: 'home', component: HomeComponent },
  { path:'buildings', component: BuildingsComponent },
  { path:'science', component: ScienceComponent},
  { path:'quests', component: QuestsComponent},
  { path:'kittens', component: KittensComponent},
  { path:'workshop', component: WorkshopComponent},

  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
