import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryBindingComponent } from './assign-inventory-binding.component';

describe('AssignInventoryBindingComponent', () => {
  let component: AssignInventoryBindingComponent;
  let fixture: ComponentFixture<AssignInventoryBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
