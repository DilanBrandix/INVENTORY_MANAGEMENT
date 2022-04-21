import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryLaceComponent } from './assign-inventory-lace.component';

describe('AssignInventoryLaceComponent', () => {
  let component: AssignInventoryLaceComponent;
  let fixture: ComponentFixture<AssignInventoryLaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryLaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryLaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
