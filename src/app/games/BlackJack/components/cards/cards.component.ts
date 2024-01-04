import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'black-jack-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

@Input()
public CardPjCpu:string= '';

}
