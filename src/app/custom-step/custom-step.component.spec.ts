import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepComponent } from './custom-step.component';

describe('CustomStepComponent', () => {
  let component: CustomStepComponent;
  let fixture: ComponentFixture<CustomStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
