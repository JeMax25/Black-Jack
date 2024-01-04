import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})

export class CardPipe implements PipeTransform {

  transform(value:string):string {

    const url = '../../../../assets/cards-black-jack/cartas/';

    return (url + value + '.png')

  }
}
