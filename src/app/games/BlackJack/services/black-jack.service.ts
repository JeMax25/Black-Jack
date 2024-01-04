import { Injectable, OnInit } from '@angular/core';
import { isNumber } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class BlackJackService {

  public deck: string[] = [];
  private typeCards: string[] = ['C','D','H','S'];
  private extraCards: string[] = ['J','K','Q','A'];
  private points:number = 0;

  constructor(){}

  createDeck () {
    for(let i = 2; i < 11; i++  ) {
      for(let typeCard of this.typeCards) {
        this.deck.push(i + typeCard);
        if (i - 2 < 4) this.deck.push( this.extraCards[i - 2] + typeCard);
      }
     }

  }

  cardValue(card:string, points:number):number {

    const cardValue:string = card.slice(0,-1);

    const cardOk = (isNaN(Number(cardValue)))? (cardValue === 'A')? 11 :10 : cardValue ;

    return this.addValue(Number(cardOk),points);;
  }

  addValue(cardValue:number,points:number):number {

    this.points = cardValue + points;

    return this.points

  }

}
