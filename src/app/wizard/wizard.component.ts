import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkStepper} from '@angular/cdk/stepper'
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [
    {
      provide: CdkStepper, useExisting: WizardComponent
    }
  ]
})
export class WizardComponent extends CdkStepper implements OnInit, AfterContentInit {  

  @Input() canProceed = false;
  @Input() stepInfo: any;

  ngOnInit(): void {
    this.selectedIndex=0;
    setTimeout(() => {
      const newSteps = [...this.steps];
    });
  }

  
  selectStepByIndex(index: number):void {
    this.selectedIndex=index;
  }

}
