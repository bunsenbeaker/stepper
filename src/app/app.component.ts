import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomStepComponent } from './custom-step/custom-step.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WizardComponent } from './wizard/wizard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    
  @ViewChild('myWizard', {read: WizardComponent}) wiz!:WizardComponent;

  @ViewChild('step2CustomNext') step2next!: TemplateRef<CustomStepComponent>;

  currentStepInfo: any;

  steps = [
    {
      id: 'step1',
      component: Step1Component
    },
    {
      id: 'step2',
      component: Step2Component,
      customNext: this.step2next
    },
    {
      id: 'step3',
      component: Step3Component
    }
  ];

  ngAfterViewInit(): void {
    this.steps[0].customNext=this.step2next;
    this.wiz?.selectionChange.subscribe((evt:StepperSelectionEvent) => {
      this.currentStepInfo = this.steps[evt.selectedIndex];
      if (evt.selectedIndex===0) {
        this.wiz.canProceed = false;
      }
    });
  }

  
  
canProceed(val:boolean):void {
  this.wiz.canProceed = val;
}

  
  goGoStep2(res: boolean): void { //2b replaced by func returning Observable (http call)   
    
    this.wiz?.next();
  }

}
