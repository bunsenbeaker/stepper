import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-step',
  templateUrl: './custom-step.component.html',
  styleUrls: ['./custom-step.component.scss']
})
export class CustomStepComponent implements OnInit , AfterViewInit{

  @Output() readyToGO:EventEmitter<boolean>=new EventEmitter();

  constructor() { }
  ngAfterViewInit(): void {
    console.log('step created');

    setTimeout(()=>{
      this.readyToGO.emit(false);
    })  
    }

  ngOnInit(): void {
    
  }

}
