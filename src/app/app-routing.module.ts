import { ScienceComponent } from './components/science/science.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // TO DO : Homecomponent lore
  { path: '', component: ScienceComponent },
  {path: 'buildings', component: BuildingsComponent },
  { path:'science', component: ScienceComponent},
  { path: '**', component: ScienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
