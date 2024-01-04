import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackJackComponent } from './BlackJack/pages/black-jack.component';
import { GamesRoutingModule } from './games-routing.module';
import { CardsComponent } from './BlackJack/components/cards/cards.component';
import { CardPipe } from './BlackJack/pipe/card.pipe';



@NgModule({
  declarations: [
    BlackJackComponent,
    CardsComponent,
    CardPipe

  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
