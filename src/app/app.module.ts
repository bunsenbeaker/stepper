import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './wizard/wizard.component';
import { WizardFooterComponent } from './wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CustomNextComponent } from './custom-next/custom-next.component';
import { CustomStepComponent } from './custom-step/custom-step.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardFooterComponent,
    WizardHeaderComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CustomNextComponent,
    CustomStepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
