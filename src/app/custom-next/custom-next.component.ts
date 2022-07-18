import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-next',
  templateUrl: './custom-next.component.html',
  styleUrls: ['./custom-next.component.scss']
})
export class CustomNextComponent implements OnInit {

  @Output() canContinue:EventEmitter<void> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
