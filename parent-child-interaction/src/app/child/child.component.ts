import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData: string;
  @Output() onChildEvent: EventEmitter;
  constructor() {
    this.onChildEvent = new EventEmitter();
  }

  ngOnInit() {}

  public emitEvent(): boolean {
    console.log('Emitting data');
    this.onChildEvent.emit('Ramesh');
    return false;
  }
}
