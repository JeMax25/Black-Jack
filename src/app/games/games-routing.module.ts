import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackJackComponent } from './BlackJack/pages/black-jack.component';

export const routes: Routes = [{
  path:'blackjack',
  component: BlackJackComponent
},
{
  path:'**',
  redirectTo: 'blackjack'
}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
