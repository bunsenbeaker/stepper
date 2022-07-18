import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNextComponent } from './custom-next.component';

describe('CustomNextComponent', () => {
  let component: CustomNextComponent;
  let fixture: ComponentFixture<CustomNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
