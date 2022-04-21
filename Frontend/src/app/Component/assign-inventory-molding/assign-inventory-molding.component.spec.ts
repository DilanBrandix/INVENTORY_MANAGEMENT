import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryMoldingComponent } from './assign-inventory-molding.component';

describe('AssignInventoryMoldingComponent', () => {
  let component: AssignInventoryMoldingComponent;
  let fixture: ComponentFixture<AssignInventoryMoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryMoldingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryMoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
