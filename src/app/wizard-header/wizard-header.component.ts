import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss']
})
export class WizardHeaderComponent {

  @Input() currentStep = 1;
  @Input() totalSteps = 1;

}
