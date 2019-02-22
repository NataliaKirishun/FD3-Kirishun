const COUNT_ITEMS_IN_ROW=4;
const ITEM_WIDTH = 143;
const ITEM_HEIGHT = 193.6;

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Sprite';

  constructor(){}

  private step=0;

  private spriteUrl:string="http://fe.it-academy.by/Examples/cards2.png";

  get url():string{
    return this.spriteUrl;
  }

  get column():number{
    return this.step - this.row*COUNT_ITEMS_IN_ROW;
  }

  get row():number{
    return Math.floor( this.step / COUNT_ITEMS_IN_ROW);
  }

  get offsetX(){
    console.log(this.column);
    return this.column*ITEM_WIDTH;
  }

  get offsetY():number{
    return this.row*ITEM_HEIGHT;
  }

  get width():number{
    return 143;
  }

  get height(){
    return ITEM_HEIGHT;
  }

  offSetHandler(){
    this.step++;
  }

}
