import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
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

  @ViewChild('step2CustomNext') step2next!: TemplateRef<any>;

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
    this.steps[1].customNext=this.step2next;
    this.wiz?.selectionChange.subscribe((evt:StepperSelectionEvent) => {
      this.currentStepInfo = this.steps[evt.selectedIndex];
    });
  }

  
  goGoStep2():void {
    this.wiz?.next();
  }

}
