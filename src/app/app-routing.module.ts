import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControleComponent } from './feature/controle/controle.component';
import { PlaygroundComponent } from './feature/playground/playground.component';

const routes: Routes = [
  { path: '', component: ControleComponent},
  { path: 'controle', component: ControleComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
