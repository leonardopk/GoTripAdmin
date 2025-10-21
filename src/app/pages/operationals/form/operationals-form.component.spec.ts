import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalsFormComponent } from './operationals-form.component';

describe('OperationalsFormComponent', () => {
  let component: OperationalsFormComponent;
  let fixture: ComponentFixture<OperationalsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationalsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
