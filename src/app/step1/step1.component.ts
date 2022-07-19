import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  @Output() proceed: EventEmitter<boolean>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
