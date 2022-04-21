import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryLayingComponent } from './assign-inventory-laying.component';

describe('AssignInventoryLayingComponent', () => {
  let component: AssignInventoryLayingComponent;
  let fixture: ComponentFixture<AssignInventoryLayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryLayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryLayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
