import { Component, OnInit } from '@angular/core';
import { BlackJackService } from '../services/black-jack.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css']
})
export class BlackJackComponent implements OnInit  {

  public deckShuffle:string[] = [];
  public deckPj:string[] = [];
  public deckCpu:string[]= [];
  //Points Player And Cpu
  public pointsPj:number = 0;
  public pointsCpu:number = 0;
  //buttons active
  public button2:boolean = false;
  public button3:boolean = false;
  //tablero Wins and Loses
  public wins: number = 0;
  public loses: number = 0;

  constructor(private bjService:BlackJackService){}

  ngOnInit(): void {

    this.bjService.createDeck();

    this.deckShuffle = this.bjService.deck;

    this.deckShuffle = _.shuffle(this.deckShuffle);

    console.log(this.deckShuffle);

    this.button3 = true;

    this.cpuTime();
  }

  takeCard() {

    if (!this.deckShuffle)return;

    this.button3 = false;

    const card = this.deckShuffle.pop()!;

    this.deckPj.push(card);

    this.pointsPj = this.bjService.cardValue(card,this.pointsPj);

    if(this.pointsPj > 21){
      this.button2 = true
      this.button3 = true;
      this.validators(this.pointsPj, this.pointsCpu)
      return;
    }else if(this.pointsPj === 21){
      this.button2 = true;
      this.validators(this.pointsPj, this.pointsCpu)
      return;}

    console.log(this.deckPj);

  }

  cpuTime() {

    if (!this.deckShuffle)return;

    do {
      const card = this.deckShuffle.pop()!;

      this.deckCpu.push(card);

      this.pointsCpu = this.bjService.cardValue(card,this.pointsCpu);
    }

    while((this.button2 === true) && (this.pointsCpu < this.pointsPj));

   this.validators(this.pointsPj,this.pointsCpu);


  }

  stopGame() {
    this.button2 = true;
    this.button3 = true;
    this.cpuTime()
  }

  newGame() {

    this.bjService.createDeck()

    this.deckShuffle = _.shuffle(this.bjService.deck);

    this.deckPj = [];
    this.deckCpu= [];

    this.pointsPj = 0;
    this.pointsCpu = 0;

    this.cpuTime();

    this.button2 = false;
    this.button3 = false;

  }

  validators(pj:number, cpu:number){

    if(pj < 1)return;

  setTimeout(() => {
    if (pj <= 21 && cpu > 21 ){
      this.wins = this.wins + 1;
      alert('Ganaste!!!! UwU');
    }else if ((cpu > pj && cpu <= 21) || (pj > 21)){
      this.loses = this.loses + 1;
      alert('Perdiste!!! UnU');
    }else if(pj === cpu){
      alert('Empate');
    }
 }, 100);

  };

}


