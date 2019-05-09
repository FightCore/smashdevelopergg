import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss']
})
export class GameSelectorComponent implements OnInit {

  @Output() onValueChange: EventEmitter<Game> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  protected valueChange(value: string) {
    const valueAsInt: number = Number.parseInt(value);
    if (this.onValueChange) {
      this.onValueChange.emit(valueAsInt);
    }
  }

}
