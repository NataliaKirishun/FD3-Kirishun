import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
})
export class SpriteComponent {
  title = 'Sprite';

  @Input() public url:string;
  @Input() public width:number;
  @Input() public height:number;
  @Input("offset-x") public offsetX:number;
  @Input("offset-y") public offsetY:number;
  @Output("change-offset") public changeOffset:EventEmitter<void>=new EventEmitter<void>();

  onClick(){
    this.changeOffset.emit();
  }

  setMyStyles(){
    return {
      'background': 'url(' + this.url + ') -' + this.offsetX + 'px -' + this.offsetY + 'px',
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }
}
