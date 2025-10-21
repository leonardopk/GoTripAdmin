import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalsListComponent } from './operationals-list.component';

describe('OperationalsListComponent', () => {
  let component: OperationalsListComponent;
  let fixture: ComponentFixture<OperationalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationalsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
