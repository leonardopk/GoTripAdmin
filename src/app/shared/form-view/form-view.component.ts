import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  standalone: false,
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss'
})
export class FormViewComponent {
  @Output() cancelBtn = new EventEmitter;
  @Output() addBtn = new EventEmitter;

  cancelBtnClicked() {
    this.cancelBtn.emit();
  }
  
  addBtnClicked() {
    this.addBtn.emit();
  }
}
