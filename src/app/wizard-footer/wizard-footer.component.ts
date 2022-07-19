import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wizard-footer',
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss']
})
export class WizardFooterComponent implements OnInit {

  @Input() customNext!: TemplateRef<any>;
  @Input() disabled = false;

  constructor() { }
  
  ngOnInit(): void {
  }

}
